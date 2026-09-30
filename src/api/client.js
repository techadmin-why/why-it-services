const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

/**
 * Universal API request wrapper for public website endpoints.
 */
export async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = { ...options.headers };

  // Set Content-Type to application/json unless body is FormData or explicitly set
  if (options.body && !(options.body instanceof FormData) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  const config = {
    credentials: 'include',
    ...options,
    headers,
  };

  try {
    const response = await fetch(url, config);
    
    let data = null;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      data = text ? { message: text } : {};
    }

    if (!response.ok) {
      const errorCode = data?.error?.code || `HTTP_${response.status}`;
      const errorMessage = data?.error?.message || getFriendlyErrorMessage(response.status);
      const details = data?.error?.details || null;

      const error = new Error(errorMessage);
      error.status = response.status;
      error.code = errorCode;
      error.details = details;
      throw error;
    }

    return data;
  } catch (err) {
    if (err.status !== undefined) {
      throw err;
    }
    // Network or connection failure
    const netError = new Error('Unable to connect to the server. Please check your internet connection and try again.');
    netError.status = 0;
    netError.code = 'NETWORK_ERROR';
    throw netError;
  }
}

/**
 * Map status code to user-friendly error message.
 */
function getFriendlyErrorMessage(status) {
  switch (status) {
    case 400:
      return 'Invalid details provided. Please review your input and try again.';
    case 401:
      return 'Unauthorized request. Please refresh the page and try again.';
    case 404:
      return 'The requested resource could not be found.';
    case 409:
      return 'A duplicate entry or scheduling conflict occurred.';
    case 413:
      return 'The uploaded file is too large. Maximum allowed file size is 5 MB.';
    case 429:
      return 'Too many requests. Please wait a few minutes before submitting again.';
    case 500:
    default:
      return 'An unexpected server error occurred. Please try again later.';
  }
}

// Endpoint-specific API functions
export async function submitContactInquiry(formData) {
  return apiRequest('/api/v1/public/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}

export async function submitRfp(formData) {
  return apiRequest('/api/v1/public/rfp', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}

export async function submitDiscoveryRequest(formData) {
  return apiRequest('/api/v1/public/discovery', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}

export async function submitEventRegistration(formData) {
  return apiRequest('/api/v1/public/events/register', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}

export async function submitHiringRequest(formData) {
  return apiRequest('/api/v1/public/hiring', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}

export async function submitJobApplication(jobId, formData) {
  return apiRequest(`/api/v1/public/jobs/${encodeURIComponent(jobId)}/apply`, {
    method: 'POST',
    body: formData, // FormData object (browser automatically sets Content-Type & boundary)
  });
}

export async function getPublicJobs(params = {}) {
  const query = new URLSearchParams(params).toString();
  const endpoint = `/api/v1/public/jobs${query ? `?${query}` : ''}`;
  return apiRequest(endpoint, { method: 'GET' });
}

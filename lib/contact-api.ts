export interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    // In a real application, you would send this to your API endpoint
    // For now, we'll simulate the API call
    
    // Validate the data
    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
      throw new Error('All fields are required')
    }
    
    if (!isValidEmail(data.email)) {
      throw new Error('Please enter a valid email address')
    }
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Log the form submission (in production, send to your backend)
    console.log('Contact form submitted:', {
      name: data.name,
      email: data.email,
      message: data.message,
      timestamp: new Date().toISOString()
    })
    
    return {
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.'
    }
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong. Please try again.'
    }
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
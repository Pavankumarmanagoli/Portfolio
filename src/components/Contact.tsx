import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('https://formspree.io/f/mblnvppv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setMessage({ type: 'success', text: 'Email sent successfully! I will get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage({ type: 'error', text: 'Failed to send email. Please try again later.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's create something amazing together!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Let's Talk</h3>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                Whether you have a question, a project idea, or just want to connect,
                feel free to reach out. I'm always open to discussing new opportunities
                and interesting challenges.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      pavanmanagoli06@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600 transition-colors">
                      +49 1521 959 2584
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">
                      Germany
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
                <p className="text-base text-gray-600 mb-2">Response Time</p>
                <p className="text-gray-900 font-semibold">Usually within 24 hours</p>
              </div> */}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-base font-medium text-gray-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-medium text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-medium text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell me what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                  <Send size={20} />
                </button>

                {message.text && (
                  <div className={`p-4 rounded-lg text-base font-medium ${
                    message.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {message.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

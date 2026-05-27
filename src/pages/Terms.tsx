import PolicyPageLayout from '../components/PolicyPageLayout';

export default function Terms() {
  return (
    <PolicyPageLayout
      title="Terms & Conditions"
      intro="These placeholder terms outline the basic usage expectations for the Educators United website and services. Replace with finalised legal text before going live."
    >
      <h2>Use of Services</h2>
      <p>By accessing Educators United, you agree to use our website and services for lawful, personal and educational purposes only.</p>

      <h2>Enrolment & Communication</h2>
      <ul>
        <li>Enquiry submissions may be used to contact you regarding suitable programmes.</li>
        <li>Course content, schedules and mentors may be updated as needed to maintain quality.</li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>All branding, content and learning material on this website belong to Educators United unless otherwise stated. Please do not reproduce without written permission.</p>

      <h2>Limitation of Liability</h2>
      <p>While we strive to deliver high-quality guidance, learning outcomes depend on student effort and participation. We do not guarantee specific results.</p>

      <h2>Changes</h2>
      <p>We may update these terms from time to time. Continued use of our services indicates acceptance of the latest version.</p>

      <p className="text-xs text-slate-500">Placeholder content — replace with finalised terms before going live.</p>
    </PolicyPageLayout>
  );
}

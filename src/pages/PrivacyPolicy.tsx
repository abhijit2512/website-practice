import PolicyPageLayout from '../components/PolicyPageLayout';

export default function PrivacyPolicy() {
  return (
    <PolicyPageLayout
      title="Privacy Policy"
      intro="This is a placeholder privacy policy for Educators United. Please replace it with your finalised legal text before publishing."
    >
      <p>Educators United (“we”, “our”, “us”) values the privacy of every learner, parent and visitor who interacts with our website and services.</p>

      <h2>Information We May Collect</h2>
      <ul>
        <li>Contact details such as name, email and phone number submitted via our enquiry forms.</li>
        <li>Course or service preferences shared during enrolment or consultation.</li>
        <li>Basic technical information such as device type and browser, collected through standard web analytics.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To respond to enquiries and provide academic guidance.</li>
        <li>To deliver, schedule and improve our online learning services.</li>
        <li>To share updates and information related to programmes you have shown interest in.</li>
      </ul>

      <h2>Data Sharing</h2>
      <p>We do not sell personal data. Information is shared only with trusted service providers who help us operate our website and services, and only to the extent necessary.</p>

      <h2>Your Choices</h2>
      <p>You may request access to, correction of, or deletion of your personal data by writing to us at <a href="mailto:info@educatorsunited.in">info@educatorsunited.in</a>.</p>

      <h2>Updates</h2>
      <p>This policy may be updated from time to time. The latest version will always be available on this page.</p>

      <p className="text-xs text-slate-500">Placeholder content — replace with finalised policy before going live.</p>
    </PolicyPageLayout>
  );
}

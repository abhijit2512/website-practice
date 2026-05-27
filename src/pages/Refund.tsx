import PolicyPageLayout from '../components/PolicyPageLayout';

export default function Refund() {
  return (
    <PolicyPageLayout
      title="Refund Policy"
      intro="This is a placeholder refund policy for Educators United. Please replace it with your finalised refund terms before publishing."
    >
      <h2>Overview</h2>
      <p>We aim to be fair and transparent with every learner and family who enrols with Educators United.</p>

      <h2>Eligibility</h2>
      <ul>
        <li>Refund requests must be raised within a clearly communicated window from the start of a programme.</li>
        <li>Sessions already delivered, customised one-to-one bookings and bundled discounts may be partially or non-refundable.</li>
        <li>Specific programme refund terms will be shared at the time of enrolment.</li>
      </ul>

      <h2>How to Request</h2>
      <p>Send a written request to <a href="mailto:info@educatorsunited.in">info@educatorsunited.in</a> with your name, programme details and reason for the request.</p>

      <h2>Processing Time</h2>
      <p>Approved refunds will typically be processed within 7–14 working days through the original payment method.</p>

      <p className="text-xs text-slate-500">Placeholder content — replace with finalised refund policy before going live.</p>
    </PolicyPageLayout>
  );
}

export default function Workflow() {
  const steps = [
    {
      title: "Step 1: First Appointment (FIT Meeting)",
      details: "Use Calendly + MS Teams or in-person. Cover ProfileMe, Critical Financial Events, client expectations, and intro goal setting with 'What’s Important to You'."
    },
    {
      title: "Step 2: Post-FIT Reflection",
      details: "Adviser and client both reflect. Proceed only if both agree to move forward."
    },
    {
      title: "Step 3: Send Consent Form",
      details: "Admin shares the Client Consent Form securely (OneDrive/email)."
    },
    {
      title: "Step 4: Once Consent is Signed",
      details: "Adviser pulls initial info from ASTUTE FSE (if applicable). Only after consent is received."
    },
    {
      title: "Step 5: Discovery Meeting",
      details: "Deep goal exploration, financial position, values using tools like 'What’s Important to You', Risk Profile Questionnaire."
    },
    {
      title: "Step 6: Collect FICA & Client Info",
      details: "Admin gathers ID, proof of address, etc. after consent and discovery. Stored securely."
    },
    {
      title: "Step 7: Prepare & Deliver Financial Plan",
      details: "Adviser builds and presents the plan tailored to goals and findings."
    },
    {
      title: "Step 8: Confirm Implementation Preferences",
      details: "Adviser confirms which strategies/products to implement. Transitions to implementation flow."
    }
  ];

  return (
    <div className="min-h-screen p-6 bg-slate-50 text-gray-800">
      <h1 className="text-2xl font-bold mb-6">Workflow: Full Planning (No Existing Plan)</h1>
      <ol className="space-y-4 list-decimal list-inside">
        {steps.map((step, i) => (
          <li key={i} className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="font-semibold">{step.title}</h2>
            <p className="text-sm text-gray-700 mt-1">{step.details}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

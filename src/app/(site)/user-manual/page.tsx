import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Manual",
  description:
    "How to work with me effectively. I'm learning to delegate more so I can focus on high-leverage work.",
  alternates: { canonical: "/user-manual" },
};

export default function UserManualPage() {
  return (
    <div className="max-w-none py-10">
      <h1 id="user-manual" className="text-[20px] font-normal leading-normal text-foreground/70 mb-6">
        User Manual
      </h1>

      <div className="prose-content">
        <p>
          How to work with me effectively. I&apos;m learning to delegate more so I
          can focus on high-leverage work.
        </p>
        <hr />

        <h2 id="what-i-value">What I Value</h2>
        <ul>
          <li>
            <strong>Constant learning and growth</strong> - Add this later.
          </li>
          <li>
            <strong>Move fast and break things</strong> - Add this later.
          </li>
          <li>
            <strong>Asynchronous communication</strong> - Add this later.
          </li>
          <li>
            <strong>Direct communication</strong> - Add this later.
          </li>
          <li>
            <strong>Health first</strong> - Add this later.
          </li>
          <li>
            <strong>Take ownership</strong> - Add this later.
          </li>
          <li>
            <strong>Simplicity</strong> - Add this later.
          </li>
        </ul>
        <hr />

        <h2 id="pet-peeves">Pet Peeves</h2>
        <ul>
          <li>
            <strong>Silence</strong> - Add this later.
          </li>
          <li>
            <strong>Context switching</strong> - Add this later.
          </li>
          <li>
            <strong>Lack of feedback</strong> - Add this later.
          </li>
        </ul>
        <hr />

        <h2 id="how-to-communicate">How to Communicate</h2>
        <p>
          <strong>Use async first.</strong> Add this later.
        </p>
        <p>
          <strong>I&apos;m often mobile.</strong> Add this later.
        </p>
        <p>
          <strong>Ask specific questions.</strong> Add this later.
        </p>
        <p>
          <strong>Prep me for meetings.</strong> Add this later.
        </p>
        <hr />

        <h2 id="how-to-message-me">How to Message Me</h2>
        <p>Add the channel and the short-message rules later.</p>
        <p>
          <strong>Good practices:</strong>
        </p>
        <ul>
          <li>
            <p>
              <strong>Clear subject lines</strong> - Add this later.
            </p>
          </li>
          <li>
            <p>
              <strong>Structure for quick decisions</strong> - Add this later.
            </p>
          </li>
          <li>
            <p>
              <strong>Flag time-sensitive items</strong> - Add this later.
            </p>
          </li>
          <li>
            <p>
              <strong>Use visuals</strong> - Add this later.
            </p>
          </li>
          <li>
            <p>
              <strong>End with clear next step</strong> - Add this later.
            </p>
          </li>
          <li>
            <p>
              <strong>Keep it short</strong> - Add this later.
            </p>
          </li>
          <li>
            <p>
              <strong>Ask forgiveness, not permission</strong> - Add this later.
            </p>
          </li>
        </ul>
        <hr />

        <h2 id="how-i-prioritize">How I Prioritize</h2>
        <ul>
          <li>
            <strong>Client work first</strong> - Add this later.
          </li>
          <li>
            <strong>Fridays for personal work</strong> - Add this later.
          </li>
          <li>
            <strong>Delegate early</strong> - Add this later.
          </li>
          <li>
            <strong>Tell people you&apos;re blocking</strong> - Add this later.
          </li>
        </ul>
        <hr />

        <h2 id="working-together">Working Together</h2>
        <ul>
          <li>
            <strong>Own your tasks</strong> - Add this later.
          </li>
          <li>
            <strong>Give consistent updates</strong> - Add this later.
          </li>
          <li>
            <strong>Challenge me with feedback</strong> - Add this later.
          </li>
          <li>
            <strong>Follow up after meetings</strong> - Add this later.
          </li>
        </ul>
        <hr />

        <h2 id="my-leadership-approach">My Leadership Approach</h2>
        <p>Add this later.</p>
      </div>
    </div>
  );
}

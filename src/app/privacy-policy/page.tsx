export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto max-w-3xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200/80">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-slate-300/90">
          Reading and understanding the &quot;Privacy Policy&quot; is crucial for users to be aware of their rights and responsibilities when using a company&apos;s services. While these agreements can be lengthy and filled with legal language, they serve to establish a clear understanding between the company and its users, helping to prevent misunderstandings and potential conflicts.
        </p>

        <p className="mt-6 text-sm font-semibold text-slate-200">
          Last updated August 22, 2023
        </p>

        <section className="mt-8 space-y-6 text-sm text-slate-200/90">
          <div>
            <h2 className="text-lg font-semibold text-slate-50">
              PRIVACY NOTICE
            </h2>
            <p className="mt-3 leading-relaxed">
              This privacy notice for Hylight (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) describes how and why we might collect, store, use, and/or share (&quot;process&quot;) your information when you use our services (&quot;Services&quot;).
            </p>
            <p className="mt-3 leading-relaxed">
              <strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at contact@hylight.io.
            </p>
            <div className="mt-4 rounded-lg border border-white/10 bg-slate-900/50 p-4">
              <p className="font-semibold text-slate-100">SUMMARY OF KEY POINTS</p>
              <p className="mt-2 text-slate-300/90">
                This summary provides key points from our privacy notice. You can find more details about any of these topics by using our table of contents below.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-300/90">
                <li><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Hylight and the Services, the choices you make, and the products and features you use.</li>
                <li><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</li>
                <li><strong>Do we receive any information from third parties?</strong> We may receive information from public databases, marketing partners, social media platforms, and other outside sources.</li>
                <li><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process your information only when we have a valid legal reason to do so.</li>
                <li><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.</li>
                <li><strong>What are your rights?</strong> Depending on where you are located geographically, you may have certain rights regarding your personal information.</li>
                <li><strong>How do you exercise your rights?</strong> The easiest way is by submitting a data subject access request or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-50">
              TABLE OF CONTENTS
            </h2>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-slate-300/90">
              {[
                "WHAT INFORMATION DO WE COLLECT?",
                "HOW DO WE PROCESS YOUR INFORMATION?",
                "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
                "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
                "HOW DO WE HANDLE YOUR SOCIAL LOGINS?",
                "IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?",
                "HOW LONG DO WE KEEP YOUR INFORMATION?",
                "DO WE COLLECT INFORMATION FROM MINORS?",
                "WHAT ARE YOUR PRIVACY RIGHTS?",
                "CONTROLS FOR DO-NOT-TRACK FEATURES",
                "DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
                "DO WE MAKE UPDATES TO THIS NOTICE?",
                "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
                "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          </div>

          <PrivacySection
            number={1}
            title="WHAT INFORMATION DO WE COLLECT?"
            content={
              <>
                <p className="font-medium text-slate-100">Personal information you disclose to us</p>
                <p className="mt-1 text-slate-400">In Short: We collect personal information that you provide to us.</p>
                <p className="mt-2 leading-relaxed">
                  We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us. <strong>Sensitive Information.</strong> We do not process sensitive information. All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                </p>
                <p className="mt-4 font-medium text-slate-100">Information automatically collected</p>
                <p className="mt-1 text-slate-400">In Short: Some information — such as your IP address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
                <p className="mt-2 leading-relaxed">
                  We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes. Like many businesses, we also collect information through cookies and similar technologies.
                </p>
              </>
            }
          />

          <PrivacySection
            number={2}
            title="HOW DO WE PROCESS YOUR INFORMATION?"
            content={
              <p className="leading-relaxed">
                <span className="text-slate-400">In Short: </span>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your personal information for a variety of reasons, depending on how you interact with our Services.
              </p>
            }
          />

          <PrivacySection
            number={3}
            title="WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
            content={
              <>
                <p className="text-slate-400">In Short: We may share information in specific situations described in this section and/or with the following third parties.</p>
                <p className="mt-3 leading-relaxed">
                  We may need to share your personal information in the following situations:
                </p>
                <p className="mt-2 leading-relaxed">
                  <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                </p>
                <p className="mt-2 leading-relaxed">
                  <strong>Affiliates.</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
                </p>
                <p className="mt-2 leading-relaxed">
                  <strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.
                </p>
              </>
            }
          />

          <PrivacySection
            number={4}
            title="DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?"
            content={
              <p className="leading-relaxed">
                <span className="text-slate-400">In Short: </span>We may use cookies and other tracking technologies to collect and store your information. We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
              </p>
            }
          />

          <PrivacySection
            number={5}
            title="HOW DO WE HANDLE YOUR SOCIAL LOGINS?"
            content={
              <p className="leading-relaxed">
                <span className="text-slate-400">In Short: </span>If you choose to register or log in using a social media account, we may have access to certain information about you. Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider (such as your name, email address, friends list, and profile picture). We will use the information we receive only for the purposes described in this privacy notice. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice and set your privacy preferences on their sites and apps.
              </p>
            }
          />

          <PrivacySection
            number={6}
            title="IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?"
            content={
              <p className="leading-relaxed">
                <span className="text-slate-400">In Short: </span>We may transfer, store, and process your information in countries other than your own. If you are accessing our Services from outside our server locations, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information. If you are a resident in the European Economic Area (EEA) or United Kingdom (UK), then these countries may not necessarily have data protection laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law.
              </p>
            }
          />

          <PrivacySection
            number={7}
            title="HOW LONG DO WE KEEP YOUR INFORMATION?"
            content={
              <p className="leading-relaxed">
                <span className="text-slate-400">In Short: </span>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law. We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), we will securely store your personal information and isolate it from any further processing until deletion is possible.
              </p>
            }
          />

          <PrivacySection
            number={8}
            title="DO WE COLLECT INFORMATION FROM MINORS?"
            content={
              <p className="leading-relaxed">
                <span className="text-slate-400">In Short: </span>We do not knowingly collect data from or market to children under 18 years of age. We do not knowingly solicit data from or market to children under 18. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent&apos;s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at contact@hylight.io.
              </p>
            }
          />

          <PrivacySection
            number={9}
            title="WHAT ARE YOUR PRIVACY RIGHTS?"
            content={
              <>
                <p className="text-slate-400">In Short: You may review, change, or terminate your account at any time.</p>
                <p className="mt-2 leading-relaxed">
                  If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority. If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.
                </p>
                <p className="mt-3 leading-relaxed">
                  <strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time by contacting us using the contact details in the section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below. This will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                </p>
                <p className="mt-3 leading-relaxed">
                  <strong>Account Information:</strong> If you would at any time like to review or change the information in your account or terminate your account, you can contact us. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                </p>
              </>
            }
          />

          <PrivacySection
            number={10}
            title="CONTROLS FOR DO-NOT-TRACK FEATURES"
            content={
              <p className="leading-relaxed">
                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
              </p>
            }
          />

          <PrivacySection
            number={11}
            title="DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"
            content={
              <>
                <p className="text-slate-400">In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>
                <p className="mt-2 leading-relaxed">
                  California Civil Code Section 1798.83, also known as the &quot;Shine The Light&quot; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
                </p>
                <p className="mt-3 leading-relaxed">
                  If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
                </p>
              </>
            }
          />

          <PrivacySection
            number={12}
            title="DO WE MAKE UPDATES TO THIS NOTICE?"
            content={
              <p className="leading-relaxed">
                <span className="text-slate-400">In Short: </span>Yes, we will update this notice as necessary to stay compliant with relevant laws. We may update this privacy notice from time to time. The updated version will be indicated by an updated &quot;Revised&quot; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
              </p>
            }
          />

          <PrivacySection
            number={13}
            title="HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
            content={
              <>
                <p className="leading-relaxed">
                  If you have questions or comments about this notice, you may email us at{" "}
                  <a href="mailto:contact@hylight.io" className="text-sky-300 hover:text-sky-200 underline">
                    contact@hylight.io
                  </a>{" "}
                  or contact us by post at:
                </p>
                <p className="mt-2 font-medium text-slate-100">
                  PO Box 177, Doncaster, Victoria 3108, Australia
                </p>
              </>
            }
          />

          <PrivacySection
            number={14}
            title="HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"
            content={
              <p className="leading-relaxed">
                Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please fill out and submit a data subject access request or contact us at contact@hylight.io.
              </p>
            }
          />
        </section>
      </main>
    </div>
  );
}

function PrivacySection({
  number,
  title,
  content,
}: {
  number: number;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="border-t border-white/10 pt-6">
      <h2 className="text-lg font-semibold text-slate-50">
        {number}. {title}
      </h2>
      <div className="mt-3">{content}</div>
    </div>
  );
}

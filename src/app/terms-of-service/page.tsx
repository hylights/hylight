export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto max-w-3xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200/80">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-slate-300/90">
          Reading and understanding the &quot;Terms of Service&quot; is crucial for users to be aware of their rights and responsibilities when using a company&apos;s services. While these agreements can be lengthy and filled with legal language, they serve to establish a clear understanding between the company and its users, helping to prevent misunderstandings and potential conflicts.
        </p>

        <p className="mt-6 text-sm font-semibold text-slate-200">
          Last updated August 22, 2023
        </p>

        <section className="mt-8 space-y-6 text-sm text-slate-200/90">
          <div>
            <h2 className="text-lg font-semibold text-slate-50">
              AGREEMENT TO OUR LEGAL TERMS
            </h2>
            <p className="mt-3 leading-relaxed">
              We are Mono BM Pty Ltd, doing business as HYLIGHT (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;), a company registered in Australia at Ground Floor, 470 St Kilda Road, Melbourne, Victoria 3004. We operate the website hylight.io (the &quot;Site&quot;), as well as any other related products and services that refer or link to these legal terms (the &quot;Legal Terms&quot;) (collectively, the &quot;Services&quot;). We provide dynamic website design and hosting capabilities; we offer a unique advantage — a personalized online chatbot embedded within each website we create. Additionally, our commitment to bolstering your SEO strategy is exemplified by our weekly blog post service. These meticulously crafted posts are designed not only to engage your audience but also to optimize your website&apos;s search engine visibility.
            </p>
            <p className="mt-3 leading-relaxed">
              You can contact us by email at contact@hylight.io or by mail to PO Box 177, Doncaster, Victoria 3108, Australia.
            </p>
            <p className="mt-3 leading-relaxed">
              These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;), and Mono BM Pty Ltd, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </p>
            <p className="mt-3 leading-relaxed">
              We will provide you with prior notice of any scheduled changes to the Services you are using. The modified Legal Terms will become effective upon posting or notifying you by contact@hylight.io, as stated in the email message. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms. The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services. We recommend that you print a copy of these Legal Terms for your records.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-50">
              TABLE OF CONTENTS
            </h2>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-slate-300/90">
              {[
                "OUR SERVICES",
                "INTELLECTUAL PROPERTY RIGHTS",
                "USER REPRESENTATIONS",
                "USER REGISTRATION",
                "PRODUCTS",
                "PURCHASES AND PAYMENT",
                "REFUNDS POLICY",
                "PROHIBITED ACTIVITIES",
                "USER GENERATED CONTRIBUTIONS",
                "CONTRIBUTION LICENSE",
                "THIRD-PARTY WEBSITES AND CONTENT",
                "SERVICES MANAGEMENT",
                "PRIVACY POLICY",
                "TERM AND TERMINATION",
                "MODIFICATIONS AND INTERRUPTIONS",
                "GOVERNING LAW",
                "DISPUTE RESOLUTION",
                "CORRECTIONS",
                "DISCLAIMER",
                "LIMITATIONS OF LIABILITY",
                "INDEMNIFICATION",
                "USER DATA",
                "ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
                "CALIFORNIA USERS AND RESIDENTS",
                "MISCELLANEOUS",
                "CONTACT US",
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          </div>

          <LegalSection
            number={1}
            title="OUR SERVICES"
            content={
              <>
                <p className="leading-relaxed">
                  The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
                </p>
                <p className="mt-3 leading-relaxed">
                  In our commitment to delivering cutting-edge website design services, we adhere to a comprehensive set of global compliance standards. Our designs are not only visually stunning but also meticulously crafted to meet industry-specific regulations and ensure an exceptional user experience. We understand the paramount importance of accessibility, which is why we design our websites in accordance with the Web Content Accessibility Guidelines (WCAG), making them usable for individuals with disabilities around the world. Respecting user privacy and data security is central to our ethos. We operate in full alignment with international data protection regulations, including the General Data Protection Regulation (GDPR) and other similar laws. Furthermore, we tailor our designs to adhere to relevant industry-specific regulations. Our commitment to intellectual property is unwavering. We ensure that all content used in our designs respects copyright and intellectual property rights globally. As a global website design partner, we take pride in offering solutions that transcend borders.
                </p>
              </>
            }
          />

          <LegalSection
            number={2}
            title="INTELLECTUAL PROPERTY RIGHTS"
            content={
              <>
                <p className="font-medium text-slate-100">Our intellectual property</p>
                <p className="mt-2 leading-relaxed">
                  We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the &quot;Content&quot;), as well as the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;). Our Content and Marks are protected by copyright and trademark laws and treaties in the United States and around the world. The Content and Marks are provided in or through the Services &quot;AS IS&quot; for your personal, non-commercial use or internal business purpose only.
                </p>
                <p className="mt-3 leading-relaxed">
                  <strong>Your use of our Services:</strong> Subject to your compliance with these Legal Terms, including the &quot;PROHIBITED ACTIVITIES&quot; section below, we grant you a non-exclusive, non-transferable, revocable license to: access the Services; and download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use or internal business purpose. Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission. If you wish to make any use of the Services, Content, or Marks other than as set out in this section, please address your request to: contact@hylight.io. We reserve all rights not expressly granted to you. Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
                </p>
                <p className="mt-3 font-medium text-slate-100">Your submissions</p>
                <p className="mt-2 leading-relaxed">
                  By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services (&quot;Submissions&quot;), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You are responsible for what you post or upload. By sending us Submissions you confirm that you have read and agree with our &quot;PROHIBITED ACTIVITIES&quot; and will not post content that is illegal, harassing, hateful, harmful, defamatory, obscene, or otherwise objectionable; you warrant that your Submissions are original to you or that you have the necessary rights and licenses to submit them; and you warrant that your Submissions do not constitute confidential information. You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of this section, any third party&apos;s intellectual property rights, or applicable law.
                </p>
              </>
            }
          />

          <LegalSection
            number={3}
            title="USER REPRESENTATIONS"
            content={
              <p className="leading-relaxed">
                By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Services through automated or non-human means; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation. If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services.
              </p>
            }
          />

          <LegalSection
            number={4}
            title="USER REGISTRATION"
            content={
              <p className="leading-relaxed">
                You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
              </p>
            }
          />

          <LegalSection
            number={5}
            title="PRODUCTS"
            content={
              <p className="leading-relaxed">
                All products are subject to availability. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
              </p>
            }
          />

          <LegalSection
            number={6}
            title="PURCHASES AND PAYMENT"
            content={
              <>
                <p className="leading-relaxed">
                  We accept Visa, Mastercard, and American Express. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in US dollars.
                </p>
                <p className="mt-3 leading-relaxed">
                  You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider. If your order is subject to recurring charges, you consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until you cancel. We reserve the right to correct any errors or mistakes in pricing. We reserve the right to refuse any order placed through the Services and may limit or cancel quantities purchased per person, per household, or per order.
                </p>
              </>
            }
          />

          <LegalSection
            number={7}
            title="REFUNDS POLICY"
            content={
              <p className="leading-relaxed font-medium">
                All sales are final and no refund will be issued.
              </p>
            }
          />

          <LegalSection
            number={8}
            title="PROHIBITED ACTIVITIES"
            content={
              <p className="leading-relaxed">
                You may not access or use the Services for any purpose other than that for which we make the Services available. You agree not to: systematically retrieve data to create a collection, compilation, database, or directory without written permission; trick, defraud, or mislead us or other users; circumvent security-related features; disparage or harm us or the Services; use information from the Services to harass, abuse, or harm another person; make improper use of our support services; use the Services inconsistently with applicable laws; engage in unauthorized framing or linking; upload or transmit viruses or interfering material; engage in automated use such as scripts or data mining; delete copyright or proprietary notices; impersonate another user; interfere with or disrupt the Services; harass or threaten our employees or agents; bypass access restrictions; copy or adapt our software; reverse engineer our software; use or distribute unauthorized automated systems; use a buying agent to make purchases; use the Services to compete with us or for any revenue-generating endeavor without our approval.
              </p>
            }
          />

          <LegalSection
            number={9}
            title="USER GENERATED CONTRIBUTIONS"
            content={
              <p className="leading-relaxed">
                The Services may provide you with the opportunity to create, submit, post, or broadcast content and materials (&quot;Contributions&quot;). When you create or make available any Contributions, you represent and warrant that: your Contributions do not infringe any third party&apos;s proprietary rights; you have the necessary licenses and permissions; you have consent for any identifiable individuals; your Contributions are not false, misleading, obscene, or otherwise objectionable; and your Contributions do not violate these Legal Terms or any applicable law. Any use of the Services in violation of the foregoing may result in termination of your rights to use the Services.
              </p>
            }
          />

          <LegalSection
            number={10}
            title="CONTRIBUTION LICENSE"
            content={
              <p className="leading-relaxed">
                We may access, store, process, and use any information and personal data that you provide. By submitting suggestions or feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you. We do not assert any ownership over your Contributions. You retain full ownership. We are not liable for any statements or representations in your Contributions. You are solely responsible for your Contributions and you agree to exonerate us from any responsibility regarding your Contributions.
              </p>
            }
          />

          <LegalSection
            number={11}
            title="THIRD-PARTY WEBSITES AND CONTENT"
            content={
              <p className="leading-relaxed">
                The Services may contain links to other websites and third-party content. Such third-party websites and content are not investigated, monitored, or checked for accuracy by us, and we are not responsible for any third-party websites or content. Inclusion of or linking to any third-party content does not imply approval or endorsement by us. If you leave the Services and access third-party websites or content, you do so at your own risk. You should review the applicable terms and policies of any website to which you navigate. We take no responsibility for purchases made through third-party websites.
              </p>
            }
          />

          <LegalSection
            number={12}
            title="SERVICES MANAGEMENT"
            content={
              <p className="leading-relaxed">
                We reserve the right to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who violates the law or these Legal Terms; (3) refuse, restrict access to, or disable any of your Contributions; (4) remove or disable files and content that are excessive in size or burdensome to our systems; and (5) otherwise manage the Services to protect our rights and property and to facilitate proper functioning of the Services.
              </p>
            }
          />

          <LegalSection
            number={13}
            title="PRIVACY POLICY"
            content={
              <p className="leading-relaxed">
                We care about data privacy and security. By using the Services, you agree to be bound by our Privacy Policy posted on the Services, which is incorporated into these Legal Terms. Please be advised the Services are hosted in Australia, United States, United Kingdom, Canada, Brazil, Germany, France and Italy. If you access the Services from any other region with different data protection laws, through your continued use you are transferring your data to those jurisdictions and you consent to have your data transferred to and processed there.
              </p>
            }
          />

          <LegalSection
            number={14}
            title="TERM AND TERMINATION"
            content={
              <p className="leading-relaxed">
                These Legal Terms shall remain in full force and effect while you use the Services. We reserve the right to deny access to and use of the Services (including blocking certain IP addresses) to any person for any reason or for no reason, including for breach of these Legal Terms or any applicable law. We may terminate your use or participation in the Services or delete your account and any content you posted at any time, without warning, in our sole discretion. If we terminate or suspend your account, you are prohibited from registering and creating a new account under your name or a fake or borrowed name. We reserve the right to take appropriate legal action, including pursuing civil, criminal, and injunctive redress.
              </p>
            }
          />

          <LegalSection
            number={15}
            title="MODIFICATIONS AND INTERRUPTIONS"
            content={
              <p className="leading-relaxed">
                We reserve the right to change, modify, or remove the contents of the Services at any time at our sole discretion without notice. We have no obligation to update any information on our Services. We may modify or discontinue all or part of the Services without notice. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance. We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance, resulting in interruptions, delays, or errors. You agree that we have no liability for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime.
              </p>
            }
          />

          <LegalSection
            number={16}
            title="GOVERNING LAW"
            content={
              <p className="leading-relaxed">
                These Legal Terms shall be governed by and defined following the laws of Australia. Mono BM Pty Ltd and yourself irrevocably consent that the courts of Australia shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
              </p>
            }
          />

          <LegalSection
            number={17}
            title="DISPUTE RESOLUTION"
            content={
              <p className="leading-relaxed">
                You agree to irrevocably submit all disputes related to these Legal Terms or the legal relationship established by these Legal Terms to the jurisdiction of the Australia courts. Mono BM Pty Ltd shall also maintain the right to bring proceedings in the courts of the country where you reside or, if these Legal Terms are entered into in the course of your trade or profession, the state of your principal place of business.
              </p>
            }
          />

          <LegalSection
            number={18}
            title="CORRECTIONS"
            content={
              <p className="leading-relaxed">
                There may be information on the Services that contains typographical errors, inaccuracies, or omissions. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
              </p>
            }
          />

          <LegalSection
            number={19}
            title="DISCLAIMER"
            content={
              <p className="leading-relaxed">
                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES&apos; CONTENT OR ANY LINKED WEBSITES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY ERRORS, MISTAKES, INACCURACIES, PERSONAL INJURY, PROPERTY DAMAGE, UNAUTHORIZED ACCESS, INTERRUPTION, BUGS, VIRUSES, OR ANY LOSS OR DAMAGE INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED OR MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY.
              </p>
            }
          />

          <LegalSection
            number={20}
            title="LIMITATIONS OF LIABILITY"
            content={
              <p className="leading-relaxed">
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
              </p>
            }
          />

          <LegalSection
            number={21}
            title="INDEMNIFICATION"
            content={
              <p className="leading-relaxed">
                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys&apos; fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties; (4) your violation of the rights of a third party; or (5) any overt harmful act toward any other user of the Services. We reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us.
              </p>
            }
          />

          <LegalSection
            number={22}
            title="USER DATA"
            content={
              <p className="leading-relaxed">
                We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption.
              </p>
            }
          />

          <LegalSection
            number={23}
            title="ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES"
            content={
              <p className="leading-relaxed">
                Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically satisfy any legal requirement that such communication be in writing. YOU AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS. You waive any rights or requirements under any statutes or laws which require an original signature or delivery or retention of non-electronic records.
              </p>
            }
          />

          <LegalSection
            number={24}
            title="CALIFORNIA USERS AND RESIDENTS"
            content={
              <p className="leading-relaxed">
                If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
              </p>
            }
          />

          <LegalSection
            number={25}
            title="MISCELLANEOUS"
            content={
              <p className="leading-relaxed">
                These Legal Terms and any policies or operating rules posted by us constitute the entire agreement between you and us. Our failure to exercise or enforce any right or provision shall not operate as a waiver. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision is deemed severable and does not affect the validity of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services.
              </p>
            }
          />

          <LegalSection
            number={26}
            title="CONTACT US"
            content={
              <>
                <p className="leading-relaxed">
                  In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
                </p>
                <p className="mt-3 font-medium text-slate-100">
                  PO Box 177, Doncaster, Victoria 3108, Australia.
                </p>
                <p className="mt-2">
                  <a href="mailto:contact@hylight.io" className="text-sky-300 hover:text-sky-200 underline">
                    contact@hylight.io
                  </a>
                </p>
              </>
            }
          />
        </section>
      </main>
    </div>
  );
}

function LegalSection({
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

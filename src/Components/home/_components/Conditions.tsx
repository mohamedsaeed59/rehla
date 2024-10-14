import { memo } from "react";

type Props = {
  setShowTerms: (open: boolean) => void;
  setOpenMenuTerms: (open: boolean) => void;
  handleAgree: () => void;
};
const Conditions = ({ setShowTerms, setOpenMenuTerms, handleAgree }: Props) => {
  const handleCancel = () => {
    setOpenMenuTerms(false);
    setShowTerms(false);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-[8px] bg-black/50 z-50">
      <div className="bg-body w-[90%] md:w-[70%] mx-auto z-50 rounded-lg border border-ry4Text shadow-md p-3 md:p-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-primary font-bold text-[22px]">
            Terms and Conditions
          </h3>
          <p className="text-[18px] font-normal text-mainBlack">
            Your Agreement
          </p>
          <div className="">
            <p className="h-[400px] overflow-y-scroll text-ry3Text text-lg font-normal">
              Last Revised: December 16, 2013 Welcome to www.lorem-ipsum.info.
              This site is provided as a service to our visitors and may be used
              for informational purposes only. Because the Terms and Conditions
              contain legal obligations, please read them carefully. 1. YOUR
              AGREEMENT By using this Site, you agree to be bound by, and to
              comply with, these Terms and Conditions. If you do not agree to
              these Terms and Conditions, please do not use this site. PLEASE
              NOTE: We reserve the right, at our sole discretion, to change,
              modify or otherwise alter these Terms and Conditions at any time.
              Unless otherwise indicated, amendments will become effective
              immediately. Please review these Terms and Conditions
              periodically. Your continued use of the Site following the posting
              of changes and/or modifications will constitute your acceptance of
              the revised Terms and Conditions and the reasonableness of these
              standards for notice of changes. For your information, this page
              was last updated as of the date at the top of these terms and
              conditions. 2. PRIVACY Please review our Privacy Policy, which
              also governs your visit to this Site, to understand our practices.
              3. LINKED SITES This Site may contain links to other independent
              third-party Web sites ("Linked Sites”). These Linked Sites are
              provided solely as a convenience to our visitors. Such Linked
              Sites are not under our control, and we are not responsible for
              and does not endorse the content of such Linked Sites, including
              any information or materials contained on such Linked Sites. You
              will need to make your own independent judgment regarding your
              interaction with these Linked Sites. 4. FORWARD LOOKING STATEMENTS
              All materials reproduced on this site speak as of the original
              date of publication or filing. The fact that a document is
              available on this site does not mean that the information
              contained in such document has not been modified or superseded by
              events or by a subsequent document or filing. We have no duty or
              policy to update any information or statements contained on this
              site and, therefore, such information or statements should not be
              relied upon as being current as of the date you access this site.
              5. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY A. THIS
              SITE MAY CONTAIN INACCURACIES AND TYPOGRAPHICAL ERRORS. WE DOES
              NOT WARRANT THE ACCURACY OR COMPLETENESS OF THE MATERIALS OR THE
              RELIABILITY OF ANY ADVICE, OPINION, STATEMENT OR OTHER INFORMATION
              DISPLAYED OR DISTRIBUTED THROUGH THE SITE. YOU EXPRESSLY expenses,
              including (without limitation) attorney's fees, arising from your
              use of the Site web sites, your use of the Products and
              PERFORMANCE This Site is controlled, operated and administered by
              us from our office in Kiev, Ukraine. We make no representation
              that materials at this site are appropriate or available for use
              at other locations outside of the Ukraine and access to them from
              territories where their contents are illegal is prohibited. If you
              access this Site from a location outside of the Ukraine, you are
              responsible for compliance with all local laws. 12. GENERAL A. If
              any provision of these Terms and Conditions is held to be invalid
              or unenforceable, the provision shall be removed (or interpreted,
              if possible, in a manner as to be enforceable), and the remaining
              provisions shall be enforced. Headings are for reference purposes
              only and in no way define, limit, construe or describe the scope
              or extent of such section. Our failure to act with respect to a
              breach by you or others does not waive our right to act with
              respect to subsequent or similar breaches. These Terms and
              Conditions set forth the entire understanding and agreement
              between us with respect to the subject matter contained herein and
              supersede any other agreement, proposals and communications,
              written or oral, between our representatives and you with respect
              to the subject matter hereof, including any terms and conditions
              on any of customer's documents or purchase orders. B. No Joint
              Venture, No Derogation of Rights. You agree that no joint venture,
              partnership, employment, or agency relationship exists between you
              and us as a result of these Terms and Conditions or your use of
              the Site. Our performance of these Terms and Conditions is subject
              to existing laws and legal process, and nothing contained herein
              is in derogation of our right to comply with governmental, court
              and law enforcement requests or requirements relating to your use
              of the Site or information provided to or gathered by us with
              respect to such use.
            </p>
          </div>
          <div className="flex gap-2 justify-end">
            <button
              onClick={handleCancel}
              className="w-[175px] py-2 px-4 text-ry3Text font-bold text-sm rounded-3xl"
            >
              Cancel
            </button>
            <button
              onClick={handleAgree}
              className="w-[175px] py-2 px-4 bg-mainBlack text-white font-bold text-sm rounded-3xl"
            >
              Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Conditions);

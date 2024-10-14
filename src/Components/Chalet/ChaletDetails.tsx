import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import rightArrow from "../../assets/icons/right-arrow.svg";
import save from "../../assets/icons/save.svg";
import favorite from "../../assets/icons/carbon_favorite.svg";
// import favorite from "../../assets/heart.png";
import Group from "../../assets/icons/Group.svg";
import location from "../../assets/icons/carbon_location.svg";
import date from "../../assets/date.png";
import Calendar from "./Calendar";
import NumberOfAdults from "./NumberOfAdults";
import SliderChaletDetails from "./SliderChaletDetails";
import Comments from "../Global/Comments";
import Thumbnails from "./_components/Thumbnails";

const ChaletDetails = () => {
  const [showComments, setShowComments] = useState<boolean>(true);

  const handelShowComments = () => {
    setShowComments(!showComments);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="container my-9">
      <div className="flex flex-wrap lg:flex-nowrap gap-3">
        <div className="flex items-center justify-center gap-3 flex-wrap-reverse lg:flex-nowrap">
          <Thumbnails />
          <SliderChaletDetails />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <Link
            to={"/savedchalets"}
            className="font-medium text-sm flex gap-1 items-center "
          >
            <div className="hover:bg-ryBackground duration-300 rounded-full p-3">
              <img
                src={rightArrow}
                alt="rightArrow"
                className="w-3 h-3 rotate-180"
              />
            </div>
            Back
          </Link>
          <div className="flex flex-col gap-2 bg-ryBackground rounded-md py-6 px-3">
            <div className="">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-2xl text-primary">Chalet name</h2>
                <div className="bg-white rounded-full p-2">
                  <img src={save} alt="save" className="object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <img src={favorite} alt="favorite" className="w-5 h-5" />
                  <span className="text-base font-light text-ry4Text">
                    1,450 Like
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={Group} alt="Group" className="w-5 h-5" />
                  <span className="text-[12px] font-semibold text-ry3Text">
                    20 Adults{" "}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-ry3Text">
                  <img src={location} alt="location" className="w-4 h-5" />
                  <span className="text-[12px] font-semibold text-mainBlack">
                    Baghdad, Iraq
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap my-3">
              <div className="flex justify-center items-center gap-2 border-[3px] border-ry4Text border-dashed py-2 px-4 rounded-3xl">
                <svg
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11.7403V8.06676C1.00212 7.51048 1.28794 6.97729 1.79503 6.58475C2.3021 6.19115 2.98922 5.96969 3.70642 5.96759H15.885C16.6022 5.96969 17.2893 6.19115 17.7963 6.58475C18.3035 6.97729 18.5893 7.51048 18.5914 8.06676V11.7403M15.2084 5.96759H3.02972V2.55644C3.03117 2.20903 3.20981 1.87526 3.52672 1.62966C3.84363 1.38405 4.27308 1.24551 4.72127 1.24446H14.8701C15.3183 1.24551 15.7478 1.38405 16.0647 1.62966C16.3816 1.87526 16.5602 2.20903 16.5617 2.55644V5.96759H15.2084Z"
                    stroke="#1E1E1E"
                    stroke-width="0.666667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="font-normal text-[13px] text-mainBlack">
                  2 Bedrooms
                </p>
              </div>
              <div className="flex justify-center items-center gap-2 border-[3px] border-ry4Text border-dashed py-2 px-4 rounded-3xl">
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_39_3670"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="22"
                    height="18"
                  >
                    <path
                      d="M21.7516 0.446266H0.641907V17.2396H21.7516V0.446266Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_39_3670)">
                    <path
                      d="M11.7786 2.31137C11.6229 2.31137 11.4738 2.3607 11.363 2.44887C11.2535 2.53598 11.1915 2.65459 11.1915 2.77844C11.1915 2.90229 11.2535 3.0209 11.363 3.10801C11.4738 3.19513 11.6229 3.24446 11.7786 3.24446H17.4017L11.9778 7.5593C11.9158 7.60128 11.8657 7.65271 11.8314 7.71044C11.7957 7.76817 11.7759 7.83219 11.7733 7.89622C11.7693 7.96024 11.7838 8.02427 11.8129 8.08409C11.8419 8.14392 11.8868 8.1985 11.9435 8.24363C12.0015 8.28981 12.0701 8.32445 12.1454 8.34859C12.2206 8.37168 12.301 8.38217 12.3815 8.38007C12.462 8.37797 12.5412 8.36223 12.6137 8.33389C12.6863 8.30555 12.7509 8.26672 12.8037 8.21739L18.2276 3.90254V8.37588C18.2276 8.49973 18.2896 8.61834 18.4004 8.70545C18.5099 8.79362 18.659 8.84294 18.8147 8.84294C18.9704 8.84294 19.1195 8.79362 19.229 8.70545C19.3385 8.61834 19.4005 8.49973 19.4005 8.37588V2.31137H11.7786Z"
                      fill="#1E1E1E"
                    />
                    <path
                      d="M2.98642 9.30896C2.98642 9.18616 3.04843 9.06756 3.15925 8.9794C3.26876 8.89228 3.41785 8.84295 3.57353 8.84295C3.72922 8.84295 3.87831 8.89228 3.98781 8.9794C4.09732 9.06756 4.15933 9.18616 4.15933 9.30896V13.7833L9.58319 9.46849C9.63597 9.41916 9.70061 9.37928 9.77318 9.35199C9.84574 9.32366 9.92622 9.30791 10.0067 9.30581C10.0872 9.30266 10.1677 9.31315 10.2429 9.33729C10.3181 9.36038 10.3867 9.39608 10.4434 9.44122C10.5015 9.4874 10.545 9.54093 10.5753 9.6018C10.6044 9.66163 10.6176 9.72564 10.6149 9.78966C10.6123 9.85369 10.5925 9.91667 10.5569 9.9744C10.5213 10.0321 10.4724 10.0836 10.4104 10.1255L4.98656 14.4404H10.6097C10.7653 14.4404 10.9144 14.4897 11.0239 14.5779C11.1348 14.665 11.1968 14.7836 11.1968 14.9074C11.1968 15.0313 11.1348 15.1499 11.0239 15.237C10.9144 15.3241 10.7653 15.3735 10.6097 15.3735H2.98642V9.30896Z"
                      fill="#1E1E1E"
                    />
                  </g>
                </svg>

                <p className="font-normal text-[13px] text-mainBlack">250m’s</p>
              </div>
              <div className="flex justify-center items-center gap-2 border-[3px] border-ry4Text border-dashed py-2 px-4 rounded-3xl">
                <svg
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4936 7.54302V9.64219C16.4936 10.3842 16.1228 11.0959 15.4631 11.6207C14.8035 12.1454 13.9089 12.4404 12.9748 12.4404H4.18004C3.24594 12.4404 2.35142 12.1454 1.69174 11.6207C1.03206 11.0959 0.661316 10.3842 0.661316 9.64219V7.96285C0.661316 7.85159 0.716735 7.74453 0.815686 7.66581C0.914638 7.58709 1.0492 7.54302 1.18905 7.54302H16.4936ZM16.4936 7.54302V3.34467C16.4936 2.60156 16.1228 1.88994 15.4631 1.36515C14.8035 0.840357 13.9089 0.545425 12.9748 0.545425H8.57744M12.0962 12.4404L12.9748 13.8405M5.05872 12.4404L4.18004 13.8405"
                    stroke="#1E1E1E"
                    stroke-width="0.666667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.5644 4.04369H5.58379C5.29221 4.04369 5.06001 3.85686 5.09167 3.62596C5.21965 2.69707 5.81468 0.545425 8.57477 0.545425C11.3335 0.545425 11.9286 2.69707 12.0579 3.62596C12.0895 3.85686 11.856 4.04369 11.5644 4.04369Z"
                    stroke="#1E1E1E"
                    stroke-width="0.666667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="font-normal text-[13px] text-mainBlack">
                  2 Bedrooms
                </p>
              </div>

              <div className="flex justify-center items-center gap-2 border-[3px] border-ry4Text border-dashed py-2 px-4 rounded-3xl">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.20932 1.87211C2.20932 1.63306 2.32572 1.40381 2.53299 1.23483C2.74011 1.06584 3.02111 0.970878 3.31398 0.970878C3.60699 0.970878 3.88799 1.06584 4.09511 1.23483C4.30238 1.40381 4.41864 1.63306 4.41864 1.87211V6.42061C4.77324 6.45396 5.14219 6.51074 5.5233 6.59185V5.47702H11.0466V8.18342C11.452 8.18792 11.8221 8.15458 12.1513 8.10231V1.87211C12.1513 1.394 11.9186 0.935618 11.5042 0.597544C11.09 0.259583 10.528 0.0696487 9.94194 0.0696487C9.35606 0.0696487 8.79406 0.259583 8.37982 0.597544C7.96543 0.935618 7.73262 1.394 7.73262 1.87211V2.32272C7.73262 2.44225 7.79089 2.55682 7.89445 2.64131C7.99801 2.7258 8.13858 2.77334 8.28495 2.77334C8.43146 2.77334 8.57202 2.7258 8.67559 2.64131C8.77915 2.55682 8.83728 2.44225 8.83728 2.32272V1.87211C8.83728 1.63306 8.95368 1.40381 9.16095 1.23483C9.36807 1.06584 9.64907 0.970878 9.94194 0.970878C10.235 0.970878 10.5159 1.06584 10.7231 1.23483C10.9303 1.40381 11.0466 1.63306 11.0466 1.87211V4.5758H5.5233V1.87211C5.5233 1.394 5.29063 0.935618 4.87625 0.597544C4.462 0.259583 3.9 0.0696487 3.31398 0.0696487C2.7281 0.0696487 2.1661 0.259583 1.75185 0.597544C1.33747 0.935618 1.10466 1.394 1.10466 1.87211V2.32272C1.10466 2.44225 1.16293 2.55682 1.26649 2.64131C1.37005 2.7258 1.51062 2.77334 1.65699 2.77334C1.8035 2.77334 1.94406 2.7258 2.04763 2.64131C2.15119 2.55682 2.20932 2.44225 2.20932 2.32272V1.87211ZM11.1294 9.98317C9.90328 9.98317 8.45728 9.74164 6.90081 9.00984C3.12508 7.23352 1.02733 8.87646 0.950007 8.93865C0.845341 9.02246 0.704498 9.06932 0.557854 9.06932C0.41121 9.06932 0.270504 9.02246 0.165699 8.93865C0.113504 8.89854 0.071941 8.8501 0.043496 8.79648C0.015189 8.74274 0.000414964 8.68484 0.000414964 8.62637C0.000414964 8.5679 0.015189 8.51 0.043496 8.45626C0.071941 8.40253 0.113504 8.3542 0.165699 8.31409C0.282793 8.21856 2.91078 6.09437 7.46419 8.22397C11.4167 10.0814 14.4644 8.33212 14.5859 8.26002C14.7057 8.19175 14.853 8.16404 14.9971 8.18251C15.1413 8.20099 15.2711 8.2643 15.3592 8.35916C15.5359 8.55472 15.4918 8.8314 15.2377 8.98371C15.1383 9.04589 13.5365 9.97506 11.1294 9.97506V9.98317ZM6.90081 11.7135C8.45838 12.4462 9.90438 12.6869 11.1294 12.6869V12.6778C13.5376 12.6778 15.1372 11.7496 15.2366 11.6865C15.2954 11.6524 15.3452 11.6089 15.3832 11.5589C15.4212 11.5088 15.4466 11.4531 15.4578 11.3949C15.4691 11.3368 15.4662 11.2774 15.4491 11.2203C15.432 11.1631 15.401 11.1093 15.3581 11.0619C15.2699 10.9672 15.1399 10.9041 14.9958 10.8858C14.8516 10.8674 14.7044 10.8953 14.5848 10.9637C14.4633 11.0358 11.4167 12.7851 7.46419 10.9277C2.91078 8.79805 0.283898 10.9223 0.165699 11.0178C-0.055233 11.1863 -0.055233 11.4729 0.165699 11.6423C0.386631 11.8208 0.740122 11.8118 0.950007 11.6423C1.02733 11.5792 3.12508 9.93631 6.90081 11.7135Z"
                    fill="#1E1E1E"
                  />
                </svg>

                <p className="font-normal text-[13px] text-mainBlack">
                  Swimming pool
                </p>
              </div>

              <div className="flex justify-center items-center gap-2 border-[3px] border-ry4Text border-dashed py-2 px-4 rounded-3xl">
                <svg
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4936 7.54302V9.64219C16.4936 10.3842 16.1228 11.0959 15.4631 11.6207C14.8035 12.1454 13.9089 12.4404 12.9748 12.4404H4.18004C3.24594 12.4404 2.35142 12.1454 1.69174 11.6207C1.03206 11.0959 0.661316 10.3842 0.661316 9.64219V7.96285C0.661316 7.85159 0.716735 7.74453 0.815686 7.66581C0.914638 7.58709 1.0492 7.54302 1.18905 7.54302H16.4936ZM16.4936 7.54302V3.34467C16.4936 2.60156 16.1228 1.88994 15.4631 1.36515C14.8035 0.840357 13.9089 0.545425 12.9748 0.545425H8.57744M12.0962 12.4404L12.9748 13.8405M5.05872 12.4404L4.18004 13.8405"
                    stroke="#1E1E1E"
                    stroke-width="0.666667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.5644 4.04369H5.58379C5.29221 4.04369 5.06001 3.85686 5.09167 3.62596C5.21965 2.69707 5.81468 0.545425 8.57477 0.545425C11.3335 0.545425 11.9286 2.69707 12.0579 3.62596C12.0895 3.85686 11.856 4.04369 11.5644 4.04369Z"
                    stroke="#1E1E1E"
                    stroke-width="0.666667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="font-normal text-[13px] text-mainBlack">
                  2 Bedrooms
                </p>
              </div>

              <div className="flex justify-center items-center gap-2 border-[3px] border-ry4Text border-dashed py-2 px-4 rounded-3xl">
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.60026 0C3.05824 0 2.53853 0.1844 2.15531 0.5126C1.77209 0.8408 1.55689 1.2859 1.55689 1.75V2.2357C1.10852 2.3446 0.713953 2.5759 0.432984 2.8943C0.152027 3.2127 0 3.6009 0 4V6.25C5.83819e-05 6.6417 0.153463 7.022 0.435704 7.3302C0.717946 7.6384 1.11272 7.8566 1.55689 7.95V8.9167C1.55689 9.0272 1.60815 9.1332 1.69935 9.2113C1.79054 9.2894 1.91431 9.3333 2.04333 9.3333C2.17236 9.3333 2.29613 9.2894 2.38744 9.2113C2.47863 9.1332 2.52989 9.0272 2.52989 8.9167V8H13.0386V8.9167C13.0386 9.0272 13.0899 9.1332 13.1811 9.2113C13.2724 9.2894 13.3962 9.3333 13.5252 9.3333C13.6542 9.3333 13.778 9.2894 13.8692 9.2113C13.9604 9.1332 14.0116 9.0272 14.0116 8.9167V7.95C14.4559 7.8568 14.8507 7.6385 15.133 7.3303C15.4152 7.0221 15.5686 6.6417 15.5686 6.25V4C15.5686 3.6009 15.4165 3.2127 15.1355 2.8943C14.8545 2.5759 14.46 2.3446 14.0116 2.2357V1.75C14.0116 0.7833 13.097 0 11.9683 0H3.60026ZM13.0386 2.1967C12.5467 2.2747 12.1022 2.4978 11.7823 2.8272C11.4623 3.1566 11.2872 3.5715 11.2872 4H4.28135C4.28135 3.1013 3.52623 2.3533 2.52989 2.1967V1.75C2.52989 1.5069 2.64268 1.2737 2.8434 1.1018C3.04412 0.9299 3.31641 0.8333 3.60026 0.8333H11.9683C12.2522 0.8333 12.5244 0.9299 12.7251 1.1018C12.9258 1.2737 13.0386 1.5069 13.0386 1.75V2.1967ZM0.973074 4C0.973074 3.8687 1.0032 3.7387 1.06193 3.6173C1.12055 3.496 1.2066 3.3858 1.31508 3.2929C1.42343 3.2 1.55222 3.1264 1.69386 3.0761C1.83549 3.0259 1.98729 3 2.14071 3C2.29402 3 2.44582 3.0259 2.58745 3.0761C2.7292 3.1264 2.85788 3.2 2.96635 3.2929C3.07471 3.3858 3.16076 3.496 3.21938 3.6173C3.27811 3.7387 3.30835 3.8687 3.30835 4V4.4167C3.30835 4.6467 3.52623 4.8333 3.79479 4.8333H11.7737C12.0423 4.8333 12.2602 4.6467 12.2602 4.4167V4C12.2602 3.7348 12.3832 3.4804 12.6022 3.2929C12.8212 3.1054 13.1182 3 13.4278 3C13.7376 3 14.0345 3.1054 14.2534 3.2929C14.4725 3.4804 14.5954 3.7348 14.5954 4V6.25C14.5954 6.4931 14.4828 6.7263 14.2819 6.8982C14.0812 7.0701 13.809 7.1667 13.5252 7.1667H2.04333C1.75948 7.1667 1.4873 7.0701 1.28659 6.8982C1.08575 6.7263 0.973074 6.4931 0.973074 6.25V4Z"
                    fill="#1E1E1E"
                  />
                </svg>

                <p className="font-normal text-[13px] text-mainBlack">
                  Living Room
                </p>
              </div>
            </div>
            <p className="font-normal text-base text-ry3Text leading-5">
              A wonderful Resort in a business-class complex is offered for
              rent.
              <br />
              High-quality materials were used in the renovation,{" "}
            </p>
            <Link
              to={"/savedchalets"}
              className="font-medium text-lg text-primary flex gap-1 items-center "
            >
              Show more
              <img
                src={rightArrow}
                alt="rightArrow"
                className="w-3 h-3 rotate-[90deg]"
              />
            </Link>
            <div className="flex flex-col gap-2 bg-white rounded-md my-2 p-3 duration-700">
              <div className="flex justify-between p-2">
                <div className="flex items-center gap-2">
                  <svg
                    width="21"
                    height="19"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2394 14.6931C14.9765 14.6931 18.8358 11.7642 18.8358 8.16258C18.8358 4.56476 14.9765 1.63587 10.2394 1.63587C5.49718 1.63587 1.64173 4.56476 1.64173 8.16258C1.64173 10.562 3.37688 12.7631 6.17153 13.913C6.38779 14.0025 6.55797 14.1764 6.63475 14.4002C6.71281 14.6189 6.69234 14.8632 6.57461 15.0666C6.26879 15.6191 5.95272 16.1461 5.65969 16.618C6.50551 16.2522 7.54967 15.6869 8.67444 14.8185C8.83695 14.688 9.04425 14.6279 9.2477 14.6484C9.58424 14.6765 9.91822 14.6931 10.2394 14.6931ZM10.2394 0C15.8786 0 20.4737 3.66307 20.4737 8.16258C20.4737 12.6659 15.8786 16.329 10.2394 16.329C9.97068 16.329 9.70324 16.3213 9.42685 16.3008C6.40698 18.5544 3.93734 18.8588 3.8273 18.8716C3.79914 18.8754 3.76588 18.8793 3.73389 18.8793C3.44981 18.8793 3.18109 18.7258 3.03138 18.4777C2.86503 18.2014 2.88039 17.8522 3.06337 17.5875C3.07617 17.576 3.87209 16.4428 4.70511 15.0372C1.77993 13.5472 0 10.9764 0 8.16258C0 3.66307 4.59122 0 10.2394 0Z"
                      fill="#7D7D7D"
                    />
                  </svg>

                  <span className="font-normal text-base text-ry5Text">
                    20 Comment
                  </span>
                </div>
                <p
                  onClick={() => handelShowComments()}
                  className="font-medium text-base border-b border-primary text-primary cursor-pointer"
                >
                  Show
                </p>
              </div>
              {!showComments && (
                <div className="flex flex-col gap-1 border-t p-3">
                  <Comments />
                  <Comments />
                  <Comments />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="py-9">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src={date} alt="date" className="w-[22px] h-[22px]" />
            <p className="text-2xl font-bold text-mainBlack">
              Select your stay Date <span className="text-red">*</span>
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="flex items-center gap-2">
              <svg
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_39_3718"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="23"
                  height="24"
                >
                  <path
                    d="M0 6.36843C0 3.21626 2.55571 0.660828 5.70833 0.660828H17.125C20.2776 0.660828 22.8333 3.21626 22.8333 6.36843V17.7836C22.8333 20.9358 20.2776 23.4912 17.125 23.4912H5.70833C2.55571 23.4912 0 20.9358 0 17.7836V6.36843Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_39_3718)">
                  <path
                    d="M5.70835 2.08772H17.125V-0.766083H5.70835V2.08772ZM21.4063 6.36842V17.7836H24.2604V6.36842H21.4063ZM17.125 22.0643H5.70835V24.9181H17.125V22.0643ZM1.4271 17.7836V6.36842H-1.42706V17.7836H1.4271ZM5.70835 22.0643C3.34389 22.0643 1.4271 20.1479 1.4271 17.7836H-1.42706C-1.42706 21.7239 1.76758 24.9181 5.70835 24.9181V22.0643ZM21.4063 17.7836C21.4063 20.1479 19.4896 22.0643 17.125 22.0643V24.9181C21.0658 24.9181 24.2604 21.7239 24.2604 17.7836H21.4063ZM17.125 2.08772C19.4896 2.08772 21.4063 4.00419 21.4063 6.36842H24.2604C24.2604 2.42818 21.0658 -0.766083 17.125 -0.766083V2.08772ZM5.70835 -0.766083C1.76758 -0.766083 -1.42706 2.42818 -1.42706 6.36842H1.4271C1.4271 4.00419 3.34389 2.08772 5.70835 2.08772V-0.766083Z"
                    fill="#DBDBDB"
                  />
                </g>
              </svg>
              <p className="text-lg font-normal text-mainBlack">Available</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_39_3722"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="23"
                  height="24"
                >
                  <path
                    d="M22.8333 0.906433H0V23.7368H22.8333V0.906433Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_39_3722)">
                  <path
                    d="M0 6.61404C0 3.46187 2.55571 0.906433 5.70833 0.906433H17.125C20.2776 0.906433 22.8333 3.46187 22.8333 6.61404V18.0292C22.8333 21.1814 20.2776 23.7368 17.125 23.7368H5.70833C2.55571 23.7368 0 21.1814 0 18.0292V6.61404Z"
                    fill="white"
                  />
                  <mask
                    id="mask1_39_3722"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="23"
                    height="24"
                  >
                    <path
                      d="M0 6.61404C0 3.46187 2.55571 0.906433 5.70833 0.906433H17.125C20.2776 0.906433 22.8333 3.46187 22.8333 6.61404V18.0292C22.8333 21.1814 20.2776 23.7368 17.125 23.7368H5.70833C2.55571 23.7368 0 21.1814 0 18.0292V6.61404Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask1_39_3722)">
                    <path
                      d="M5.70835 2.33335H17.125V-0.520447H5.70835V2.33335ZM21.4063 6.61406V18.0293H24.2604V6.61406H21.4063ZM17.125 22.31H5.70835V25.1638H17.125V22.31ZM1.4271 18.0293V6.61406H-1.42706V18.0293H1.4271ZM5.70835 22.31C3.34389 22.31 1.4271 20.3935 1.4271 18.0293H-1.42706C-1.42706 21.9695 1.76758 25.1638 5.70835 25.1638V22.31ZM21.4063 18.0293C21.4063 20.3935 19.4896 22.31 17.125 22.31V25.1638C21.0658 25.1638 24.2604 21.9695 24.2604 18.0293H21.4063ZM17.125 2.33335C19.4896 2.33335 21.4063 4.24982 21.4063 6.61406H24.2604C24.2604 2.67381 21.0658 -0.520447 17.125 -0.520447V2.33335ZM5.70835 -0.520447C1.76758 -0.520447 -1.42706 2.67381 -1.42706 6.61406H1.4271C1.4271 4.24982 3.34389 2.33335 5.70835 2.33335V-0.520447Z"
                      fill="#DBDBDB"
                    />
                  </g>
                  <path
                    d="M1.42706 6.61401C1.42706 4.24978 3.34385 2.33331 5.70831 2.33331H17.125C19.4895 2.33331 21.4062 4.24978 21.4062 6.61401H1.42706Z"
                    fill="#F3C800"
                  />
                </g>
              </svg>

              <p className="text-lg font-normal text-mainBlack">Not Filled</p>
            </div>

            <div className="flex items-center gap-2">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_39_3733"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="23"
                  height="23"
                >
                  <path
                    d="M0 5.85964C0 2.70747 2.55571 0.152039 5.70833 0.152039H17.125C20.2776 0.152039 22.8333 2.70747 22.8333 5.85964V17.2748C22.8333 20.427 20.2776 22.9824 17.125 22.9824H5.70833C2.55571 22.9824 0 20.427 0 17.2748V5.85964Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_39_3733)">
                  <path
                    d="M5.70835 1.57896H17.125V-1.27484H5.70835V1.57896ZM21.4063 5.85966V17.2749H24.2604V5.85966H21.4063ZM17.125 21.5556H5.70835V24.4094H17.125V21.5556ZM1.4271 17.2749V5.85966H-1.42706V17.2749H1.4271ZM5.70835 21.5556C3.34389 21.5556 1.4271 19.6391 1.4271 17.2749H-1.42706C-1.42706 21.2151 1.76758 24.4094 5.70835 24.4094V21.5556ZM21.4063 17.2749C21.4063 19.6391 19.4896 21.5556 17.125 21.5556V24.4094C21.0658 24.4094 24.2604 21.2151 24.2604 17.2749H21.4063ZM17.125 1.57896C19.4896 1.57896 21.4063 3.49543 21.4063 5.85966H24.2604C24.2604 1.91942 21.0658 -1.27484 17.125 -1.27484V1.57896ZM5.70835 -1.27484C1.76758 -1.27484 -1.42706 1.91942 -1.42706 5.85966H1.4271C1.4271 3.49543 3.34389 1.57896 5.70835 1.57896V-1.27484Z"
                    fill="#DBDBDB"
                  />
                </g>
              </svg>

              <p className="text-lg font-normal text-mainBlack">
                Not Available
              </p>
            </div>
          </div>
        </div>
      </div>
      <Calendar />
      <NumberOfAdults />
      <div className="flex justify-center items-center">
        <Link
          to={"/check-out"}
          className="rounded-[33px] text-center w-full md:w-[500px] py-4  text-2xl font-bold bg-mainBlack text-white"
        >
          CHECK OUT
        </Link>
      </div>
    </div>
  );
};

export default memo(ChaletDetails);

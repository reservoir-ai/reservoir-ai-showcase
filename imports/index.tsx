import svgPaths from "./svg-m7ivppu5i0";

function Icon() {
  return <div className="bg-white relative rounded-[999px] shrink-0 size-[30px]" data-name="Icon" />;
}

function LogoWordmark() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Logo / wordmark">
      <Icon />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.08px] whitespace-nowrap">Logo</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[10px] items-center leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.08px] whitespace-nowrap">
      <p className="relative shrink-0">Item</p>
      <p className="relative shrink-0">Item</p>
      <p className="relative shrink-0">Item</p>
      <p className="relative shrink-0">Item</p>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#12344d] content-stretch flex items-center justify-between overflow-clip p-[24px] relative shrink-0 w-full" data-name="Header">
      <LogoWordmark />
      <Frame22 />
    </div>
  );
}

function ArrowForward() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[20px]">
      <div className="flex-none rotate-90">
        <div className="relative size-[20px]" data-name="Arrow forward">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <g clipPath="url(#clip0_0_8)" id="Arrow forward">
              <g id="Vector" />
              <path d={svgPaths.p6903c80} fill="white" id="Vector_2" />
            </g>
            <defs>
              <clipPath id="clip0_0_8">
                <rect fill="white" height="20" width="20" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#12344d] content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[18px] py-[8px] relative rounded-[4px] shrink-0" data-name="CTA">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[13px] text-white tracking-[0.06px] whitespace-nowrap">Learn more</p>
      <ArrowForward />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative">
      <div className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[#12344d] text-[0px] tracking-[-0.44px] w-[min-content]">
        <p className="leading-[normal] mb-0 text-[60px]">Argos</p>
        <p className="font-['Inter:Semi_Bold_Italic',sans-serif] italic leading-[normal] text-[#456] text-[40px]">Reservoir AI</p>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#12344d] text-[20px] tracking-[-0.3px] w-[min-content]">AI-assisted engineering intelligence for reservoir simulation models</p>
      <Cta />
    </div>
  );
}

function ImagePlaceholder() {
  return <div className="bg-white border border-[#e8ecef] border-solid h-[294px] relative rounded-[4px] shadow-[0px_0px_12px_2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Image Placeholder" />;
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[552px]">
      <ImagePlaceholder />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#456] text-[13px] text-center tracking-[0.06px] w-full">Reservoir AI transforms reservoir simulation decks into structured engineering information.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center pt-[72px] px-[76px] relative shrink-0 w-full">
      <Frame />
      <Frame2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-[#12344d]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29px] relative shrink-0 text-[40px] text-center tracking-[-0.44px] w-[552px]">Demo Cases</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] tracking-[-0.08px] w-[552px] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">The following synthetic cases demonstrate different aspects of Reservoir AI. Each case is built from a reservoir simulation deck and processed through the same application workflow.</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px]">Together, they demonstrate conventional model interpretation, grid-quality assessment, model validation, and domain-specific SAGD analysis.</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[10px] tracking-[0.72px] uppercase w-[552px]">01</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29px] relative shrink-0 text-[30px] tracking-[-0.44px] w-[552px]">Base Case</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-[#12344d]">
      <Frame5 />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] tracking-[-0.08px] w-[552px] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">A conventional black-oil model used as the primary reference case for Reservoir AI.</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">The model contains a complete reservoir, grid, fluid, rock-fluid, and well description. Reservoir AI converts this information into a structured engineering summary, characterizes reservoir heterogeneity, reconstructs the well inventory, and identifies conditions that deserve engineering review.</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px]">The Base Case is intentionally structurally valid. Its engineering findings illustrate an important distinction within the platform: a model can pass validation while still containing assumptions or relationships that warrant engineering attention.</p>
      </div>
    </div>
  );
}

function ImagePlaceholder1() {
  return <div className="bg-white border border-[#e8ecef] border-solid h-[294px] relative rounded-[4px] shadow-[0px_0px_12px_2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Image Placeholder" />;
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[453px]">
      <ImagePlaceholder1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#456] text-[13px] text-center tracking-[0.06px] w-full">Image label</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start px-[76px] relative shrink-0 w-[1280px]">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 1128 2" width="1128">
            <line id="Divider" stroke="#C4C4C4" strokeWidth="2" x2="1128" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <Frame15 />
    </div>
  );
}

function Cards() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards1() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards2() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards3() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards4() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards5() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function CardsRow() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 text-black w-full" data-name="Cards row">
      <Cards />
      <Cards1 />
      <Cards2 />
      <Cards3 />
      <Cards4 />
      <Cards5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative text-[#12344d]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase w-full">Engineering Diagnostics</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[16px] tracking-[-0.08px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">High Vertical Permeability Ratio</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Relative Permeability Curve Direction Review</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[30px]">Control After Shut-In</span>
        </li>
      </ul>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative text-[#12344d]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase w-full">Analysis</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[16px] tracking-[-0.08px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">8 reservoir layers identified</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Moderate heterogeneity</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Dykstra-Parsons ≈ 0.42</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[30px]">Layer 4 has the highest estimated pore-volume contribution</span>
        </li>
      </ul>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold gap-[24px] items-start justify-center min-w-px relative">
      <p className="leading-[13.5px] relative shrink-0 text-[#12344d] text-[12px] tracking-[0.72px] uppercase w-full">Validation</p>
      <p className="leading-[20px] relative shrink-0 text-[#34702f] text-[16px] tracking-[-0.08px] w-full">0 validation findings</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Frame10 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[40px] items-start not-italic px-[76px] relative shrink-0 w-full">
      <CardsRow />
      <Frame9 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame11 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[10px] tracking-[0.72px] uppercase w-[552px]">02</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29px] relative shrink-0 text-[30px] tracking-[-0.44px] w-[552px]">Grid Quality Review</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 text-[#12344d]">
      <Frame20 />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] tracking-[-0.08px] w-[552px] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">A reservoir model designed specifically to demonstrate automated assessment of grid geometry and layer quality.</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px]">Most of the model remains geometrically reasonable. Selected regions deliberately contain localized grid problems, allowing Reservoir AI to identify specific areas requiring attention without characterizing the entire model as poor quality.</p>
      </div>
    </div>
  );
}

function ImagePlaceholder2() {
  return <div className="bg-white border border-[#e8ecef] border-solid h-[294px] relative rounded-[4px] shadow-[0px_0px_12px_2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Image Placeholder" />;
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[453px]">
      <ImagePlaceholder2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#456] text-[13px] text-center tracking-[0.06px] w-full">Image label</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame19 />
      <Frame21 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start px-[76px] relative shrink-0 w-[1280px]">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 1128 2" width="1128">
            <line id="Divider" stroke="#C4C4C4" strokeWidth="2" x2="1128" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <Frame18 />
    </div>
  );
}

function Cards6() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards7() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards8() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards9() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards10() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards11() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function CardsRow1() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 text-black w-full" data-name="Cards row">
      <Cards6 />
      <Cards7 />
      <Cards8 />
      <Cards9 />
      <Cards10 />
      <Cards11 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative text-[#12344d]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase w-full">Engineering Diagnostics</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[16px] tracking-[-0.08px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Grid Aspect Ratio Extreme</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Layer High Thickness Variability</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[30px]">Layer Near-Zero Thickness</span>
        </li>
      </ul>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative text-[#12344d]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase w-full">Analysis</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[16px] tracking-[-0.08px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">10 reservoir layers identified</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Layer 7 has the highest thickness variability</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Minimum cell thickness ≈ 0.08 m in Layer 9</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[30px]">Approximately 96% of cells remain below the aspect-ratio warning threshold</span>
        </li>
      </ul>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold gap-[24px] items-start justify-center min-w-px relative">
      <p className="leading-[13.5px] relative shrink-0 text-[#12344d] text-[12px] tracking-[0.72px] uppercase w-full">Validation</p>
      <p className="leading-[20px] relative shrink-0 text-[#34702f] text-[16px] tracking-[-0.08px] w-full">0 validation findings</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Frame25 />
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[40px] items-start not-italic px-[76px] relative shrink-0 w-full">
      <CardsRow1 />
      <Frame24 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame23 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#12344d]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[10px] tracking-[0.72px] uppercase w-[552px]">03</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29px] relative shrink-0 text-[30px] tracking-[-0.44px] w-[552px]">Model QA Review</p>
    </div>
  );
}

function Frame33() {
  return <div className="bg-[#0e6b6e] h-[64px] relative shrink-0 w-[3px]" />;
}

function Info() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Info">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Info">
          <path d={svgPaths.p6e93600} fill="#0E6B6E" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Callout1() {
  return (
    <div className="bg-[rgba(14,107,110,0.1)] content-stretch flex flex-[1_0_0] gap-[10px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Callout">
      <Info />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-px not-italic relative text-[#111] text-[16px] tracking-[-0.08px]">Validation evaluates whether the model inputs and structure are internally consistent. Diagnostics evaluate engineering conditions that deserve review.</p>
    </div>
  );
}

function Callout() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Callout">
      <Frame33 />
      <Callout1 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[648px]">
      <Frame32 />
      <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#12344d] text-[16px] tracking-[-0.08px] w-[552px] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">{`A deliberately imperfect reservoir simulation model used to demonstrate Reservoir AI's validation workflow.`}</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px]">This case contains structural and input-integrity problems representative of issues that can arise during model construction, transfer, or reassessment.</p>
      </div>
      <Callout />
    </div>
  );
}

function ImagePlaceholder3() {
  return <div className="bg-white border border-[#e8ecef] border-solid h-[294px] relative rounded-[4px] shadow-[0px_0px_12px_2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Image Placeholder" />;
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[453px]">
      <ImagePlaceholder3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#456] text-[13px] text-center tracking-[0.06px] w-full">Image label</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame31 />
      <Frame34 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start px-[76px] relative shrink-0 w-[1280px]">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 1128 2" width="1128">
            <line id="Divider" stroke="#C4C4C4" strokeWidth="2" x2="1128" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <Frame30 />
    </div>
  );
}

function Cards12() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards13() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards14() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards15() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards16() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards17() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function CardsRow2() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[13px] items-center not-italic relative shrink-0 text-black w-full" data-name="Cards row">
      <Cards12 />
      <Cards13 />
      <Cards14 />
      <Cards15 />
      <Cards16 />
      <Cards17 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px not-italic relative">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] relative shrink-0 text-[#12344d] text-[12px] tracking-[0.72px] uppercase w-full">Validation Findings</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#a2131a] text-[16px] tracking-[-0.08px] w-full">4 findings · 2 errors · 2 warnings</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#12344d] text-[16px] tracking-[-0.08px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Static Property Size Mismatch</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Incomplete Static Property</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Missing Required Property</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[30px]">Well Definition Inconsistency</span>
        </li>
      </ul>
    </div>
  );
}

function Frame38() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px not-italic relative text-[#12344d]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] relative shrink-0 text-[12px] tracking-[0.72px] uppercase w-full">Engineering Diagnostics</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[16px] tracking-[-0.08px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Relative Permeability Curve Direction Review</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">High Vertical Permeability Ratio</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[30px]">Control After Shut-In</span>
        </li>
      </ul>
    </div>
  );
}

function Frame39() {
  return <div className="flex-[1_0_0] h-[14px] min-w-px relative" />;
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Frame37 />
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start px-[76px] relative shrink-0 w-full">
      <CardsRow2 />
      <Frame36 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame29 />
      <Frame35 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[10px] tracking-[0.72px] uppercase w-[552px]">04</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29px] relative shrink-0 text-[30px] tracking-[-0.44px] w-[552px]">SAGD Development</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start justify-center not-italic relative shrink-0 text-[#12344d] w-[648px]">
      <Frame44 />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] tracking-[-0.08px] w-[552px] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">{`A synthetic thermal-development model used to demonstrate Reservoir AI's domain-specific SAGD analysis.`}</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">The case represents a high-porosity, high-permeability bitumen reservoir with paired horizontal steam injectors and producers.</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px]">Rather than treating wells only as independent model objects, Reservoir AI identifies producer-injector relationships and evaluates the reservoir region surrounding each detected SAGD pair.</p>
      </div>
    </div>
  );
}

function ImagePlaceholder4() {
  return <div className="bg-white border border-[#e8ecef] border-solid h-[294px] relative rounded-[4px] shadow-[0px_0px_12px_2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Image Placeholder" />;
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[453px]">
      <ImagePlaceholder4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#456] text-[13px] text-center tracking-[0.06px] w-full">Image label</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame43 />
      <Frame45 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start px-[76px] relative shrink-0 w-[1280px]">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 1128 2" width="1128">
            <line id="Divider" stroke="#C4C4C4" strokeWidth="2" x2="1128" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <Frame42 />
    </div>
  );
}

function Cards18() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards19() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards20() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards21() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards22() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function Cards23() {
  return (
    <div className="bg-white border border-[#e8ecef] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip p-[12px] relative rounded-[4px]" data-name="Cards">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[14px] leading-[19px] relative shrink-0 text-[19px] w-full">6</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[13px] tracking-[0.06px] w-full">Description</p>
    </div>
  );
}

function CardsRow3() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[13px] items-center not-italic relative shrink-0 text-black w-full" data-name="Cards row">
      <Cards18 />
      <Cards19 />
      <Cards20 />
      <Cards21 />
      <Cards22 />
      <Cards23 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start min-w-px not-italic relative text-[#12344d]">
      <p className="leading-[13.5px] relative shrink-0 text-[10px] tracking-[0.72px] uppercase w-full">SAGD Analysis</p>
      <div className="leading-[0] relative shrink-0 text-[16px] tracking-[-0.08px] w-full">
        <p className="leading-[30px] mb-[20px]">3 valid well pairs identified</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[30px]">P01 – I01</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[30px]">P02 – I02</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[30px]">P03 – I03</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start min-w-px not-italic relative text-[#12344d]">
      <p className="leading-[13.5px] relative shrink-0 text-[10px] tracking-[0.72px] uppercase w-full">Additional Review</p>
      <ul className="block leading-[0] list-disc relative shrink-0 text-[16px] tracking-[-0.08px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">P04 identified as an unpaired producer</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">I04 identified as an unpaired injector</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[30px]">I03 contains a Control After Shut-In condition</span>
        </li>
      </ul>
      <p className="leading-[20px] relative shrink-0 text-[16px] tracking-[-0.08px] w-full">Pair-level analysis can evaluate local porosity, Kv/Kh, vertical separation, and the sampled assessment region surrounding each well pair.</p>
    </div>
  );
}

function Frame50() {
  return <div className="flex-[1_0_0] h-[14px] min-w-px relative" />;
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Frame48 />
      <Frame49 />
      <Frame50 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start px-[76px] relative shrink-0 w-full">
      <CardsRow3 />
      <Frame47 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame41 />
      <Frame46 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#e8ecef] content-stretch flex flex-col gap-[72px] items-center justify-center py-[72px] relative shrink-0 w-full">
      <Frame6 />
      <Frame12 />
      <Frame16 />
      <Frame28 />
      <Frame40 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-[#12344d]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29px] relative shrink-0 text-[40px] text-center tracking-[-0.44px] w-[552px]">Technology</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] tracking-[-0.08px] w-[552px]">Reservoir AI is implemented as a modular engineering software platform that separates simulation-model parsing, reservoir-engineering logic, persistence, APIs, and presentation.</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame53 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[10px] tracking-[0.72px] uppercase w-full">Backend</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[14px] tracking-[-0.08px] w-full">Python · FastAPI · SQLAlchemy</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[16px] tracking-[-0.08px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Simulation-deck parsing</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Reservoir domain models</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Grid-geometry reconstruction</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Model validation</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Engineering diagnostics</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[30px]">Persistence and API services</span>
        </li>
      </ul>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[10px] tracking-[0.72px] uppercase w-full">Engineering Processing</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[14px] tracking-[-0.08px] w-full">NumPy · Engineering services</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[16px] tracking-[-0.08px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Static-property analysis</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Layer characterization</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Dykstra–Parsons heterogeneity</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Rock-fluid interpretation</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Well timeline reconstruction</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[30px]">SAGD pair analysis</span>
        </li>
      </ul>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[10px] tracking-[0.72px] uppercase w-full">Frontend</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[14px] tracking-[-0.08px] w-full">React · TypeScript</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[16px] tracking-[-0.08px] w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Assets and projects</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Simulation cases</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Structured model summaries</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Validation findings</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[30px]">Engineering diagnostics</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[30px]">Analysis results</span>
        </li>
      </ul>
    </div>
  );
}

function Frame54() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[24px] items-start justify-center not-italic relative shrink-0 text-[#12344d] w-full">
      <Frame55 />
      <Frame56 />
      <Frame57 />
    </div>
  );
}

function FlowMap() {
  return (
    <div className="bg-[#f8fafb] border border-[#e8ecef] border-solid content-stretch flex gap-[16px] items-center overflow-clip px-[32px] py-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Flow Map">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.08px] whitespace-nowrap">Simulation Deck</p>
      <div className="relative shrink-0 size-[13.333px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
          <path d={svgPaths.p8dfa900} fill="#6F8499" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.08px] whitespace-nowrap">Parser</p>
      <div className="relative shrink-0 size-[13.333px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
          <path d={svgPaths.p8dfa900} fill="#6F8499" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.08px] whitespace-nowrap">Reservoir Domain Model</p>
      <div className="relative shrink-0 size-[13.333px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
          <path d={svgPaths.p8dfa900} fill="#6F8499" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.08px] whitespace-nowrap">Validation / Analysis / Diagnostics</p>
      <div className="relative shrink-0 size-[13.333px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
          <path d={svgPaths.p8dfa900} fill="#6F8499" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.08px] whitespace-nowrap">Persistence / API</p>
      <div className="relative shrink-0 size-[13.333px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
          <path d={svgPaths.p8dfa900} fill="#6F8499" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.08px] whitespace-nowrap">Reservoir AI Interface</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start px-[76px] relative shrink-0 w-full">
      <Frame52 />
      <Frame54 />
      <FlowMap />
    </div>
  );
}

function Frame60() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-[#12344d]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[29px] relative shrink-0 text-[40px] text-center tracking-[-0.44px] w-[552px]">Future Work</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] tracking-[-0.08px] w-[552px] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0 text-[16px]">Future development will expand Reservoir AI with broader simulator support, simulation-results integration, richer engineering diagnostics, and automated case comparison.</p>
        <p className="leading-[20px] mb-0 text-[16px]">​</p>
        <p className="mb-0 text-[16px]">
          <span className="leading-[20px]">{`A key direction is the use of `}</span>
          <span className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic tracking-[-0.08px]">small language models (SLMs)</span>
          <span className="leading-[20px]">{` for specialized reservoir-engineering tasks, enabling efficient natural-language interaction, model interpretation, and domain-specific assistance with lower computational requirements.`}</span>
        </p>
        <p className="leading-[20px] mb-0 text-[16px]">​</p>
        <p className="leading-[20px] text-[16px]">The long-term goal is to combine deterministic engineering analysis, simulation data, and specialized AI into a practical reservoir-engineering decision-support platform.</p>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame60 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-[#e8ecef] content-stretch flex flex-col items-start px-[76px] py-[72px] relative shrink-0 w-full">
      <Frame59 />
    </div>
  );
}

function DesktopPage() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[72px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Desktop Page">
      <Frame1 />
      <Frame3 />
      <Frame51 />
      <Frame58 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start not-italic relative shrink-0 w-[440px]">
      <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#12344d] text-[0px] tracking-[-0.44px] w-full">
        <p className="leading-[normal] mb-0 text-[40px] text-white">Argos</p>
        <p className="leading-[normal] text-[#f8fafb] text-[30px]">Reservoir AI</p>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[14px] text-white tracking-[-0.08px] w-full">Transforming simulation models into engineering knowledge.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#c4c4c4] text-[11px] w-full">Reservoir AI is an independent engineering software project exploring how structured software architecture, reservoir-engineering analysis, and AI-assisted workflows can improve the interpretation and review of reservoir simulation models.</p>
    </div>
  );
}

function Icon1() {
  return <div className="bg-white relative rounded-[999px] shrink-0 size-[30px]" data-name="Icon" />;
}

function Icon2() {
  return <div className="bg-white relative rounded-[999px] shrink-0 size-[30px]" data-name="Icon" />;
}

function Icon3() {
  return <div className="bg-white relative rounded-[999px] shrink-0 size-[30px]" data-name="Icon" />;
}

function Icon4() {
  return <div className="bg-white relative rounded-[999px] shrink-0 size-[30px]" data-name="Icon" />;
}

function SocialIcon() {
  return (
    <div className="content-stretch flex gap-[13px] items-center opacity-60 relative shrink-0" data-name="Social Icon">
      <Icon1 />
      <Icon2 />
      <Icon3 />
      <Icon4 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[440px]">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] min-w-full not-italic relative shrink-0 text-[14px] text-white tracking-[-0.08px] w-[min-content]">Connect with us</p>
      <SocialIcon />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame62 />
      <Frame63 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[16px] not-italic relative shrink-0 text-[#6f8499] text-[11px]">
      <p className="relative shrink-0 w-[1128px]">All reservoir models, assets, project names, operating data, and engineering values shown in this showcase are synthetic demonstration data.</p>
      <p className="relative shrink-0 w-[1128px]">{`Legal copy here. `}</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#12344d] content-stretch flex flex-col h-[340px] items-start justify-between overflow-clip pb-[24px] pt-[72px] px-[76px] relative shrink-0 w-full" data-name="Footer">
      <Frame61 />
      <Frame64 />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Landing Page">
      <Header />
      <DesktopPage />
      <Footer />
    </div>
  );
}
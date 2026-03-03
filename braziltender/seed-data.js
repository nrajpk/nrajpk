// seed-data.js
export const defaultHTML = `
<div class="page" style="padding: 0; display: flex; flex-direction: column; overflow: hidden; border-radius: 8px;">
  <div style="width: 100%; height: 55mm; position: relative; background-color: var(--bg-gray); overflow: hidden;">
    <img src="mevahero.jpeg" alt="MEVA Armored Vehicles" style="width: 100%; height: 100%; object-fit: cover; display: block;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
    <div style="display:none; width:100%; height:100%; align-items:center; justify-content:center; flex-direction:column; color:#9ca3af; font-size:14px; font-weight:bold; background:#e5e7eb; position:absolute; top:0; left:0;">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" style="margin-bottom:10px;">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      [ HERO IMAGE PLACEHOLDER (WIDE) ]
    </div>
    <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 8px; background-color: var(--brand-color);"></div>
  </div>

  <div style="padding: 60px 50px; background-color: #fff; flex-grow: 1; box-sizing: border-box;">
    <div style="font-size: 14px; font-weight: 800; color: var(--brand-color); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px;">
      Technical & Commercial Proposal
    </div>
    <h1 style="font-size: 38px; font-weight: 800; color: var(--text-main); margin: 0 0 24px 0; line-height: 1.1; letter-spacing: -0.5px;">
      Polícia Militar do Estado do Espírito Santo
    </h1>
    <div style="width: 60px; height: 4px; background-color: var(--brand-color); margin-bottom: 35px; border-radius: 2px;"></div>

    <table style="width: 100%; border: none; font-size: 14px; margin-bottom: 0; box-shadow: none; border-radius: 0;">
      <tr>
        <td style="padding: 5px 0; font-weight: 700; color: var(--text-muted); width: 140px; border: none; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Auction No:</td>
        <td style="padding: 5px 0; font-weight: 700; color: var(--text-main); border: none; font-size: 15px;">002/2026 – PMES</td>
      </tr>
      <tr>
        <td style="padding: 5px 0; font-weight: 700; color: var(--text-muted); border: none; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Destination:</td>
        <td style="padding: 5px 0; font-weight: 600; color: var(--text-main); border: none; font-size: 15px;">State of Espírito Santo, Brazil</td>
      </tr>
      <tr>
        <td style="padding: 5px 0; font-weight: 700; color: var(--text-muted); border: none; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Bidder:</td>
        <td style="padding: 5px 0; font-weight: 800; color: var(--brand-color); border: none; font-size: 16px;">Mahindra Emirates Vehicle Armouring FZ-LLC</td>
      </tr>
    </table>
  </div>
</div>

<div class="page" id="index-page">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="vol-identifier">MASTER DOCUMENT INDEX</div>
    <p class="para" style="margin-bottom: 20px;">Click any section below to jump directly to the relevant page.</p>
    <div class="toc-container" contenteditable="false">
      <a href="#vol1" class="toc-link">PART I — ADMINISTRATIVE & LEGAL DOCUMENTS</a><br>
      <a href="#vol2" class="toc-link">PART II — TAX, SOCIAL & LABOR QUALIFICATION</a><br>
      <a href="#vol3" class="toc-link">PART III — TECHNICAL QUALIFICATION</a><br>
      <a href="#item3-4" class="toc-sublink">↳ ITEM 1 – APC: Technical Compliance Matrix</a><br>
      <a href="#item3-7" class="toc-sublink">↳ ITEM 2 – CAV: Technical Compliance Matrix</a><br>
      <a href="#apc-evidence" class="toc-sublink">↳ Visual References & Evidence</a><br>
      <a href="#vol4" class="toc-link">PART IV — ECONOMIC & FINANCIAL QUALIFICATION</a><br>
      <a href="#vol5" class="toc-link">PART V — COMMERCIAL PROPOSAL</a><br>
      <a href="#vol6" class="toc-link">PART VI — SAMPLE & TESTING COMMITMENT</a><br>
      <a href="#vol7" class="toc-link">PART VII — POST-CONTRACT COMMITMENTS</a><br>
      <div class="toc-divider"></div>
      <a href="#final-declarations" class="toc-link">FINAL DECLARATIONS & SIGNATURES</a><br>
      <div class="toc-divider"></div>
      <a href="#vol8" class="toc-link">PART VIII — ANNEXURES & CERTIFICATES</a>
    </div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page" id="vol1">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="vol-identifier">PART I — ADMINISTRATIVE & LEGAL DOCUMENTS</div>
    <div class="main-heading">Part Summary Checklist (Common)</div>
    <table>
      <thead><tr><th style="width: 8%;">Ref. No</th><th style="width: 36%;">Details</th><th style="width: 8%;">Comply</th><th style="width: 24%;">MEVA Response</th><th style="width: 24%;">Supporting Documents</th></tr></thead>
      <tbody>
        <tr><td>1.1</td><td><strong>Bid Cover Letter</strong><br><em style="font-size:9px; color:gray;">Identifies bidder & Brazilian representative, States participation.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Acknowledged and provided.</td><td>Annex 1.1</td></tr>
        <tr><td>1.2</td><td><strong>Corporate Legal Existence Documents</strong><br><em style="font-size:9px; color:gray;">UAE Trade License, MoA, Commercial Reg. & Apostille.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Valid UAE documents attached.</td><td>Annex 1.2</td></tr>
        <tr><td>1.3</td><td><strong>Power of Attorney</strong><br><em style="font-size:9px; color:gray;">Grants authority to receive summons & sign ARP/Contract. Apostilled.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Apostilled PoA attached.</td><td>Annex 1.3</td></tr>
        <tr><td>1.4</td><td><strong>Declarations (Law 14.133/2021)</strong><br><em style="font-size:9px; color:gray;">Acceptance of Conditions, Labor rights, No minors, No conflict, etc.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>All declarations accepted.</td><td>Annex 1.4</td></tr>
        <tr><td>1.5</td><td><strong>Declaration of Non-Existence</strong><br><em style="font-size:9px; color:gray;">Only for BR docs with no UAE equivalent.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Notarized declaration attached.</td><td>Annex 1.5</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>

    <div id="vol2" class="vol-identifier" style="margin-top: 20px;">PART II — TAX, SOCIAL & LABOR QUALIFICATION</div>
    <div class="main-heading">Part Summary Checklist (Common)</div>
    <table>
      <thead><tr><th style="width: 8%;">Ref. No</th><th style="width: 36%;">Details</th><th style="width: 8%;">Comply</th><th style="width: 24%;">MEVA Response</th><th style="width: 24%;">Supporting Documents</th></tr></thead>
      <tbody>
        <tr><td>2.1</td><td><strong>UAE Tax Registration Certificate</strong><br><em style="font-size:9px; color:gray;">Equivalent to CNPJ (FTA – TRN).</em></td><td class="col-exec col-exec-tbd">TBD</td><td>TRN Certificate provided.</td><td>Annex 2.1</td></tr>
        <tr><td>2.2</td><td><strong>UAE Tax Compliance Certificate</strong><br><em style="font-size:9px; color:gray;">FTA clearance confirming no liabilities.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Clearance provided.</td><td>Annex 2.2</td></tr>
        <tr><td>2.3</td><td><strong>Labor Compliance Certificate</strong><br><em style="font-size:9px; color:gray;">MOHRE good standing certificate.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>MOHRE cert provided.</td><td>Annex 2.3</td></tr>
        <tr><td>2.4</td><td><strong>Bankruptcy / Insolvency Certificate</strong><br><em style="font-size:9px; color:gray;">Issued by UAE court. Apostilled.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Court certificate attached.</td><td>Annex 2.4</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page" id="vol3">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="vol-identifier">PART III — TECHNICAL QUALIFICATION</div>
    
    <div class="sub-heading" style="margin-top: 0;">A. COMMON TECHNICAL QUALIFICATION</div>
    <table>
      <thead><tr><th style="width: 8%;">Ref. No</th><th style="width: 36%;">Details</th><th style="width: 8%;">Comply</th><th style="width: 24%;">MEVA Response</th><th style="width: 24%;">Supporting Documents</th></tr></thead>
      <tbody>
        <tr><td>3.1</td><td><strong>Technical-Operational Capacity Certificate(s)</strong><br><em style="font-size:9px; color:gray;">Must prove supply of at least 2 units (APC) and 10 units (CAV). Issued by police/military authority.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Certificates exceed minimum qty.</td><td>Annex 3.1</td></tr>
        <tr><td>3.2</td><td><strong>Proof of Project Maturity</strong><br><em style="font-size:9px; color:gray;">Minimum 2 Years MLE Use. End-user cert, Invoice or Police letter.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Historical MLE supply proven.</td><td>Annex 3.2</td></tr>
        <tr><td>3.3</td><td><strong>Manufacturer Letter of Solidarity</strong><br><em style="font-size:9px; color:gray;">Only if bidder is not the manufacturer.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>MEVA is the Manufacturer.</td><td>Not Applicable</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>

    <div class="sub-heading" style="margin-top: 14px;">B. ITEM 1 – APC (MEDIUM ARMOURED VEHICLE)</div>
    <div id="item3-4" class="main-heading" style="margin-top: 10px; font-size: 13px;">3.4 Technical Compliance Report – Annex IB</div>
    <p class="para">Must confirm compliance with ALL specifications listed below.</p>
    
    <table>
      <thead>
        <tr>
          <th style="width:8%">Ref. No</th>
          <th style="width:36%">Details</th>
          <th style="width:8%">Comply</th>
          <th style="width:24%">MEVA Response</th>
          <th style="width:24%">Supporting Documents</th>
        </tr>
      </thead>
      <tbody>
        <tr><th colspan="5" class="group-header">1. OF THE OBJECT</th></tr>
        <tr><td>1.1.1</td><td>Acquisition of a light armored operational vehicle for the transport of 10 (ten) operational military personnel (driver; commander + 8).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>1.1.2</td><td>Manufactured in 2024 or later, never used, 0 (zero) kilometer condition, guaranteed by the manufacturer.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>1.1.3</td><td>Adaptations for visual and auditory signaling, communication, and transceivers may be installed in Brazilian territory.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2. TECHNICAL SPECIFICATIONS OF THE VEHICLES</th></tr>
        <tr><td>2.1.1</td><td>Chassis: Mounted on a commercial chassis and reinforced with the capacity to support an armored structure.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.2.1</td><td>Engine type: Internal combustion engine, turbo diesel, Euro 4 or higher.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.2.2</td><td>Power: 300 HP.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.2.3</td><td>Torque: Minimum torque 1,000 Nm / 1,200 to 2,200 rpm.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        
        <tr><th colspan="5" class="group-header">2.3 TRANSMISSION, STEERING, BRAKES and SUSPENSION</th></tr>
        <tr><td>2.3.1</td><td>Gearbox: Automatic transmission with at least six forward speeds and one reverse speed, torque converter and electronic management.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.2</td><td>Wheel drive: 4X4 part-time; real-time electronic transfer case; automatic/manual freewheel.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.3 (a)</td><td>Brakes: The braking system must have (ABS) on all wheels.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.3 (b)</td><td>Brakes: Electronic brake force distribution (EBD); Ventilated disc brakes on all four wheels.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.3 (c)</td><td>Brakes: The service brake system must keep the vehicle immobilized, even at its total weight, when parked on the asphalt surface up to 60%.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.3 (d)</td><td>Brakes: Electronic stability control (ESP) that can be activated or deactivated inside the cabin.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="main-heading" style="font-size: 13px;">3.4 Technical Compliance Report – Annex IB (Cont.)</div>

    <table>
      <thead>
        <tr><th style="width:8%">Ref. No</th><th style="width:36%">Details</th><th style="width:8%">Comply</th><th style="width:24%">MEVA Response</th><th style="width:24%">Supporting Documents</th></tr>
      </thead>
      <tbody>
        <tr><td>2.3.4 (a)</td><td>Direction: Hydraulic or electrical.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.4 (b)</td><td>Direction: Original factory steering wheel positioned on the left side of the cabin.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.5</td><td>Suspension: The axles must be reinforced to meet military requirements.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.4 ELECTRICAL SYSTEMS, LIGHTING AND AIR CONDITIONING</th></tr>
        <tr><td>2.4.1 (a)</td><td>Electrical: Compatible capacity to simultaneously power the vehicle's original consumers, adaptations, and comms equipment.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.1 (b)</td><td>Electrical: Harnesses, frames, and wiring must be packaged and insulated to prevent rust and friction/pinching damage.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.1 (c)</td><td>Electrical: Wiring protected against water, weather, and dirt by a conduit/similar type shield.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.1 (d)</td><td>Electrical: Wiring coding that meets ABNT 5410 or similar; cables not installed in locations subject to cuts/edges.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.1 (e)</td><td>Electrical: System voltage - 12 volts.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.1 (f)</td><td>Electrical: The vehicle must have at least 02 (two) 12-volt batteries.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.2 (a)</td><td>Lighting: LED headlights.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.2 (b)</td><td>Lighting: LED lamps – interior and exterior lighting (except headlights/turn signals).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.3 (a)</td><td>Air Cond: Cooling/ventilation with air outlets directed throughout the cabin (front/rear), without affecting engine performance.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.3 (b)</td><td>Air Cond: Capacity to cool the cabin in an environment where the outside temperature exceeds 50°C.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.3 (c)</td><td>Air Cond: The system must provide both hot and cold air.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.5 PERFORMANCE, 2.6 DIMENSIONS & 2.7 WEIGHT</th></tr>
        <tr><td>2.5.1</td><td>Minimum fuel tank capacity: 200 liters.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.5.2</td><td>Fuel: S10 Diesel.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.5.3</td><td>Minimum range: 500 km on mixed terrain and under normal driving conditions.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.5.4 (a)</td><td>Wheels and tires: 18” rim and larger.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.5.4 (b)</td><td>Wheels and tires: System Run Flat on all tires, including the spare tire.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.5.5 (a)</td><td>Performance: Cruising speed 90 km/h.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.5.5 (b)</td><td>Performance: Maximum speed 100 km/h.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.6.1</td><td>Maximum length: 7000 mm.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.6.2</td><td>Maximum width: 3000 mm.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.6.3</td><td>Height (VCW): 3000 mm.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.6.4</td><td>Maximum wheelbase: 3600 mm.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.6.5</td><td>Minimum distance from the ground (not less than): 250 mm.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.7.1</td><td>Gross Vehicle Weight Rating (GVWR): up to 12000 kg.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.7.2</td><td>Curb weight (CW): up to 10,000 kg.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.7.3</td><td>Minimum payload: 1500 kg.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.8 MINIMUM DRIVING CHARACTERISTICS</th></tr>
        <tr><td>2.8.1 (a)</td><td>Gradual ascent/descent capacity: 50%.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.8.1 (b)</td><td>Static lateral tilt: 30º.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.8.1 (c)</td><td>Minimum approach/entry angle: 30º.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.8.1 (d)</td><td>Minimum start/departure angle: 30º.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="main-heading" style="font-size: 13px;">3.4 Technical Compliance Report – Annex IB (Cont.)</div>

    <table>
      <thead>
        <tr><th style="width:8%">Ref. No</th><th style="width:36%">Details</th><th style="width:8%">Comply</th><th style="width:24%">MEVA Response</th><th style="width:24%">Supporting Documents</th></tr>
      </thead>
      <tbody>
        <tr><th colspan="5" class="group-header">2.9 CONFIGURATION</th></tr>
        <tr><td>2.9.1 (a)</td><td>Seats for 10 (ten) police officers. Configuration 1+1+8 = 10.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.1 (b)</td><td>Driver and passenger seats in cloth, mounted on the floor and manually adjustable.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.1 (c)</td><td>All seats have seat belts.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.2 (a)</td><td>Vehicle configuration: 4 (four) side doors.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.2 (b)</td><td>1 (door) rear door hinged outwards from the vehicle.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.2 (c)</td><td>1 (one) escape hatch in the roof.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.2 (d)</td><td>Exterior running boards around all side doors and the rear door.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.3 (a)</td><td>Configuration of 11 (eleven) replaceable windows: Split windshield.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.3 (b)</td><td>Side doors with a single window in each door.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.3 (c)</td><td>Single window in the rear door.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.3 (d)</td><td>All windows must be covered with factory-installed blinds.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.4 (a)</td><td>Configuration of 11 (eleven) firing ports: side door below all windows.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.4 (b)</td><td>Firing ports: on the rear door below the window.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.4 (c)</td><td>Firing ports: on the side wall below the lower windows.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.4 (d)</td><td>Firing ports: at the top of the door below the window.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.5</td><td>Locks: Standard with manual key.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.10 BALLISTIC PROTECTION</th></tr>
        <tr><td>2.10 (a)</td><td>Police protection cell: CEN BR 7 (glazed areas and opaque).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.10 (b)</td><td>Arrow slits: Have the same ballistic protection as the police cell.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.10 (c)</td><td>Floor: Protection against simultaneous explosions of two DM51 grenades, one HG85, and one DM31 mine (certified by independent labs).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.10 (d)</td><td>Engine / Front mudguards: Critical components (batteries, ECU, ABS).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.10 (e)</td><td>Front radiator guard for 7.62 x 51mm ball NATO 60°N.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.11 GRAPHIC DESIGN</th></tr>
        <tr><td>2.11 (I)</td><td>CIELAB Standard Color Space (D65/10º, A/10º, T84/10º compliant).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.11 (II)</td><td>Special paint identification stickers according to PMES standards.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.12 MANUALS & ACCESSORIES</th></tr>
        <tr><td>2.12.1 (a)</td><td>At least 04 (four) external cameras for peripheral viewing of the car.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.12.1 (b)</td><td>AM/FM Stereo radio with digital clock and 2 speakers. Prepared for antenna.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.12.1 (c)</td><td>Sufficient lifting tools for changing the wheel.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.12.1 (d)</td><td>Electromechanical winch mounted on the front bumper with a capacity of 4,000 kg.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.12.1 (e)</td><td>The exterior rearview mirrors must have electric controls.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.12.2</td><td>Operating manual for driver and preventive maintenance manual in Portuguese.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.12.3</td><td>Training must be taught in Portuguese and conducted within the state of Espírito Santo.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="main-heading" style="font-size: 13px;">3.4 Technical Compliance Report – Annex IB (Cont.)</div>

    <table>
      <thead>
        <tr><th style="width:8%">Ref. No</th><th style="width:36%">Details</th><th style="width:8%">Comply</th><th style="width:24%">MEVA Response</th><th style="width:24%">Supporting Documents</th></tr>
      </thead>
      <tbody>
        <tr><th colspan="5" class="group-header">2.13 ACOUSTIC SIGNALING</th></tr>
        <tr><td>2.13.1 (a)</td><td>Electronic siren: amplifier min 100W @ 11 Ohms. Single sound-emitting unit. At least 3 tones (Wail, Yelp, Horn). Sound pressure min 110 dB at 1 meter.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.13.1 (b)</td><td>Siren installation must prioritize discretion, not visible through front grille. Lowest possible noise in driver's cabin.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.13.1 (c)</td><td>Installation of low-frequency siren permitted, provided it is in addition to main siren.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.13.1 (d)</td><td>Driver must be sealed and specifically designed for police use (not musical).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.13.1 (e)</td><td>Specific points on the body for attaching the horn (main audio output thread not permitted).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.13.1 (f)</td><td>Must not generate electromagnetic noise interfering with transceivers/original audio.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.13.1 (g)</td><td>Must follow ANATEL regulations.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.14 VISUAL SIGNALING</th></tr>
        <tr><td>2.14.1 (I)</td><td>Withstand Brazilian weather: Rain, temps -10ºC to 45ºC, humidity 15% to 95%.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.14.1 (II)</td><td>Withstand corrosive, abrasive (sand, dust) and similar elements.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.14.1 (III)</td><td>Automatic load management (shuts down before voltage drops too low to start vehicle).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.14.1 (IV)</td><td>Electronic circuit must manage current via PWM (Pulse Width Modulator). Protective metal casing.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.14.1 (V)</td><td>COLORS: Red LED (610-660nm, 80 ANSI lumens peak); Blue LED (450-490nm, 60 ANSI lumens peak); Amber LED (585-595nm, 70 ANSI lumens peak); White LED (4500-6500K, 120 ANSI lumens peak).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.14.1 (VI)</td><td>SECONDARY LIGHTING: Front (4x 3W LED modules, 6 alternating Red/Blue LEDs). Rear (4x 3W LED modules, 6 alternating Red/Blue LEDs). Distributed uniformly.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.14.1 (VIII)</td><td>WHITE LIGHTS WITH STROBOSCOPIC EFFECTS: High-intensity white lights installed inside headlights/taillights, synchronized face-to-face (min 350 ANSI lumens). Or equivalent strobe lights nearby.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.15 COMMUNICATION EQUIPMENT (TETRA)</th></tr>
        <tr><td>2.15 (a-c)</td><td>Power: 5A fused cable to battery. Routed to dashboard/trunk. Operates without ignition key.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.15 (d)</td><td>Radiating System: Roof antenna, multifunctional (GPS, GSM, 3G, WLAN, TETRA) in single unit. IP66. 12x12 cm plastic cover under ceiling lining.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.15 (e)</td><td>Frequencies/Impedance: 50 ohms. TETRA 380-400 MHz (VSWR ≤ 1.5). Independent cables with proper terminals (SMA, FME).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.16 ANALOG TRANSCEIVER</th></tr>
        <tr><td>2.16</td><td>Adapt location for Motorola PRO5100. Remote mounting kit provided by contractor. Radio freq 42-50 MHz, 60W.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.16</td><td>External VHF antenna: Monopole, min gain 0 dB, impedance 50 Ohms, VSWR max 1.5:1, freq 46-49 MHz. Steel reinforcing plate under roof.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.16</td><td>RG58C/RGC58 coaxial cable. Report required measuring impedance and SWR at 46 and 49 MHz. Signed by installer.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>

    <div class="sub-heading" style="margin-top: 20px;">Item 1 – Formal Certifications Required (Refer to Part VIII)</div>
    <table>
      <thead><tr><th style="width: 8%;">Ref. No</th><th style="width: 36%;">Details</th><th style="width: 8%;">Comply</th><th style="width: 24%;">MEVA Response</th><th style="width: 24%;">Supporting Documents</th></tr></thead>
      <tbody>
        <tr><td>3.5</td><td><strong>Ballistic Certification – APC</strong><br><em style="font-size:9px; color:gray;">Independent lab. Opaque/Transparent level CEN BR 7. VIN linkage required later.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Independent BR7 Cert attached.</td><td>Annex 3.5</td></tr>
        <tr><td>3.6</td><td><strong>Underbody Protection Certification – APC</strong><br><em style="font-size:9px; color:gray;">Blast test compliance certification.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Blast Certs attached.</td><td>Annex 3.6</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="vol-identifier">PART III — TECHNICAL QUALIFICATION</div>
    <div class="sub-heading" style="margin-top: 0;">C. ITEM 2 – CAV (ARMOURED SUV)</div>

    <div id="item3-7" class="main-heading" style="margin-top: 10px; font-size: 13px;">3.7 Technical Compliance Report – Annex ID</div>
    <p class="para">Must confirm compliance with ALL specifications listed below.</p>
    
    <table>
      <thead>
        <tr><th style="width:8%">Ref. No</th><th style="width:36%">Details</th><th style="width:8%">Comply</th><th style="width:24%">MEVA Response</th><th style="width:24%">Supporting Documents</th></tr>
      </thead>
      <tbody>
        <tr><th colspan="5" class="group-header">1. OBJECT</th></tr>
        <tr><td>1.1.1</td><td>Acquisition of armored tactical SUV for transport of 05 military personnel (1 driver + 1 cmdr + 3).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>1.1.2</td><td>Manufactured in 2024 or later, never used, 0 (zero) kilometer condition, guaranteed by manufacturer.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2. TECHNICAL SPECIFICATIONS OF THE VEHICLES</th></tr>
        <tr><td>2.1.1</td><td>Chassis: Mounted on a commercial chassis and reinforced to support armored structure.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.2.1</td><td>Engine type: Internal combustion engine, turbo diesel, Euro 4 or higher.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.2.2</td><td>Power: 300 HP.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.2.3</td><td>Torque: Minimum torque 700 Nm / 1,500 to 2,700 rpm.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        
        <tr><th colspan="5" class="group-header">2.3 TRANSMISSION, STEERING, BRAKES & SUSPENSION</th></tr>
        <tr><td>2.3.1</td><td>Gearbox: Automatic transmission with at least six forward speeds and one reverse speed, torque converter and electronic management.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.2 (a)</td><td>Wheel drive: Full-time 4WD.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.2 (b)</td><td>Wheel drive: 4X4 part-time electronic transfer box; Real-time; automatic/manual freewheel.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.3 (a)</td><td>Brakes: Braking system must have (ABS) on all wheels.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.3 (b)</td><td>Brakes: Electronic brake force distribution (EBD); Ventilated disc brakes on all four wheels.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.3 (c)</td><td>Brakes: Service brake must keep vehicle immobilized up to 60% gradient.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.3 (d)</td><td>Brakes: Electronic stability control (ESP) activatable from inside the cabin.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.4 (a)</td><td>Direction: Hydraulic or electrical.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.4 (b)</td><td>Direction: Original factory steering wheel positioned on the left side of the cabin.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.5</td><td>Suspension: The axles must be reinforced to meet military requirements.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.4 ELECTRICAL, LIGHTING & AC</th></tr>
        <tr><td>2.4.1 (a)</td><td>Electrical: Compatible capacity to simultaneously power vehicle, adaptations, and comms.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.1 (b-d)</td><td>Electrical: Harnesses and wiring packaged/insulated, protected against water/dirt, coded per ABNT 5410.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.1 (e)</td><td>Electrical: System voltage - 12 volts.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.1 (f)</td><td>Electrical: The vehicle must have at least 02 (two) 12-volt batteries.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.2 (a-c)</td><td>Lighting: LED headlights, LED interior/exterior lamps, LED or halogen ceiling light.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.3 (a-c)</td><td>Air Cond: Cooling/ventilation front/rear. Cools in >50°C environments. Hot and cold air.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="main-heading" style="font-size: 13px;">3.7 Technical Compliance Report – Annex ID (Cont.)</div>

    <table>
      <thead>
        <tr><th style="width:8%">Ref. No</th><th style="width:36%">Details</th><th style="width:8%">Comply</th><th style="width:24%">MEVA Response</th><th style="width:24%">Supporting Documents</th></tr>
      </thead>
      <tbody>
        <tr><th colspan="5" class="group-header">2.5 PERFORMANCE, 2.6 DIMENSIONS & 2.7 WEIGHT</th></tr>
        <tr><td>2.5.1</td><td>Fuel tank capacity: 110 liters.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.5.2</td><td>Fuel: S10 Diesel.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.5.3</td><td>Minimum range: 700 km fully charged.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.5.4 (a)</td><td>Wheels and tires: 18” rim and larger.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.5.4 (b)</td><td>Wheels and tires: System Run Flat on all tires, including the spare tire.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.5.5 (a)</td><td>Performance: Cruising speed 90 km/h.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.5.5 (b)</td><td>Performance: Maximum speed 120 km/h.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.6.1</td><td>Maximum length: 5500 mm.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.6.2</td><td>Maximum width: 2000 mm.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.6.3</td><td>Maximum height (VCW): 2000 mm.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.6.4</td><td>Maximum wheelbase: 3000 mm.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.6.5</td><td>Minimum ground clearance: 220 mm.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.7.1</td><td>Gross Vehicle Weight Rating (GVWR): up to 6000 kg.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.7.2</td><td>Curb weight (CW): up to 5000 kg.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.7.3</td><td>Minimum payload: 1000 kg.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.8 DRIVING CHARACTERISTICS</th></tr>
        <tr><td>2.8.1 (a)</td><td>Vertical obstacle/climbing up to gradual ascent/descent capacity: 50%.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.8.1 (b)</td><td>Minimum static lateral tilt: 30º.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.8.1 (c)</td><td>Minimum approach/entry angle: 30º.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.8.1 (e)</td><td>Minimum start/departure angle: 20º.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.9 CONFIGURATION</th></tr>
        <tr><td>2.9.1 (a)</td><td>Seats for 5 (five) police officers. Configuration 1+1+3 = 5.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.1 (b-d)</td><td>Driver/passenger seats in cloth. Second row 3 seats facing forward. All have seat belts.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.2 (a-c)</td><td>5-door vehicle: 4 side doors (forward hinge), 1 rear door. Exterior door sills.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.3 (a-d)</td><td>7 replaceable windows: One-piece windshield, single window in side/rear doors. 1 escape hatch.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.4 (a-c)</td><td>Locks: Standard manual key; Presence sensor; Door lock/alarm control.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.10 BALLISTIC PROTECTION</th></tr>
        <tr><td>2.10</td><td>Protective cell (glazed areas, floor, engine): VPAM EDITION 3 VR7 (5.56x45mm NATO & 7.62x51mm NATO). Front radiator guard 7.62x51mm 60°N. Front mudguards, critical engine comps (batteries, ECU, ABS).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.11 GRAPHIC DESIGN</th></tr>
        <tr><td>2.11 (I)</td><td>CIELAB Standard Color Space (D65/10º, A/10º, T84/10º).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.11 (II)</td><td>Special paint stickers per PMES. Unmarked: metallic, solid, or pearlescent.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="main-heading" style="font-size: 13px;">3.7 Technical Compliance Report – Annex ID (Cont.)</div>

    <table>
      <thead>
        <tr><th style="width:8%">Ref. No</th><th style="width:36%">Details</th><th style="width:8%">Comply</th><th style="width:24%">MEVA Response</th><th style="width:24%">Supporting Documents</th></tr>
      </thead>
      <tbody>
        <tr><th colspan="5" class="group-header">2.12 MANUALS, ACC. & 2.13 ACOUSTICS</th></tr>
        <tr><td>2.12.1 (a)</td><td>Color reversing camera and backup monitor with one-way microphone.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.12.1 (b)</td><td>AM/FM Stereo radio with digital clock and 2 speakers. Prepared for antenna.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.12.1 (c)</td><td>Sufficient lifting tools for changing the wheel.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.12.1 (d)</td><td>Exterior rearview mirrors electrically operated.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.12.2</td><td>Operating and preventive maintenance manuals in Portuguese.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.13.1 (a)</td><td>Electronic siren: amplifier min 100W @ 11 Ohms. Min 110 dB at 1m. 3 tones (Wail, Yelp, Horn).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.13.1 (b-c)</td><td>Discreet installation (not visible in grille). Lowest possible cabin noise. Low-freq siren permitted if additional.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.13.1 (d-g)</td><td>Sealed driver for police use. Specific body mounting points. No RF interference. ANATEL compliant.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.14, 2.15 & 2.16 VISUAL, COMMS & LIGHTING ASSY</th></tr>
        <tr><td>2.14.1</td><td>Visual Signaling: Weather resistant, PWM load mgmt. Roof Lightbar (>90% width) with animations (ROUND, QTI, STOP, EMERGENCY). Alley lights (min 1500 lumens/side).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.14.1 (X)</td><td>SECONDARY LIGHTING: Front (4x 3W LED modules, 6 alternating Red/Blue). Rear (4x 3W LED modules, 6 alternating Red/Blue).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.14.1 (XI)</td><td>WHITE LIGHTS WITH STROBE EFFECTS: Inside headlights/taillights, synchronized face-to-face, min 350 ANSI lumens.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.14.1 (XII)</td><td>TRAFFIC GUIDANCE BAR: Amber, min 5 segments (left->right, right->left, center->edges).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.14.1 (XIII)</td><td>CONTROL PANEL: 1 DIN (179x50mm). Controls visual/acoustic signaling. Specific keys per client model.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.15</td><td>Comms Prep (TETRA): 5A fused cable, Multifunction roof antenna (GPS/GSM/3G/WLAN/TETRA) IP66. Independent cables. 12x12 cm access cover.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.15</td><td>Comms Prep (Analog): PRO5100 prep. VHF Antenna (46-49 MHz), SWR ≤ 1.5:1. Impedance/SWR report required.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.16</td><td>Unmarked Lighting Assy: Front primary (inside windshield), Rear primary (inside rear window), Secondary (behind grille, smoked lens). 2 magnetic emblems (40 cm).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>

    <div class="sub-heading" style="margin-top: 20px;">Item 2 – Formal Certifications Required (Refer to Part VIII)</div>
    <table>
      <thead><tr><th style="width: 8%;">Ref. No</th><th style="width: 36%;">Details</th><th style="width: 8%;">Comply</th><th style="width: 24%;">MEVA Response</th><th style="width: 24%;">Supporting Documents</th></tr></thead>
      <tbody>
        <tr><td>3.8</td><td><strong>Ballistic Certification – CAV</strong><br><em style="font-size:9px; color:gray;">Independent lab. Opaque + transparent shielding per VPAM VR7.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Independent VPAM VR7 Cert.</td><td>Annex 3.8</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>
    
    <div class="info-box" style="margin-top: 14px;">
      <div class="sub-heading" style="margin: 0 0 8px 0;">Reference Ballistic & Blast Performance Summary (VPAM VR7 Baseline)</div>
      <div class="text-muted" style="font-size: 12px; margin-bottom: 10px;">Reference baseline text extracted from MEVA VPAM VR7 TLC300 certification pack for standard alignment. Final offered vehicle certificates and VIN-linked reports shall be provided in PART VIII as per tender requirement.</div>
      <div style="font-weight: 700; margin: 8px 0 6px 0;">Independent Certification</div>
      <ul style="margin: 0 0 10px 18px; font-size:11px;">
        <li>VPAM VR7 certified / Tested by Beschussamt Ulm GmbH (3-Star rating).</li>
      </ul>
      <div style="font-weight: 700; margin: 8px 0 6px 0;">Blast and Underbody / Roof References</div>
      <ul style="margin: 0 0 10px 18px; font-size:11px;">
        <li>Side blast: 12.5 kg PETN at 4 m / Underbody: DM 31 (x1) and HG 85 (x2) / Roof: DM 51 double charge.</li>
      </ul>
    </div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page" id="apc-evidence">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="vol-identifier">PART III — VISUAL REFERENCES</div>
    <div class="main-heading">Equipment Configuration (APC & CAV)</div>
    <p class="para">The following technical diagrams and visual evidence corroborate the specifications detailed in Annex IB and Annex ID.</p>

    <div class="img-grid">
      <div class="img-box">
        <div class="img-title">Item 1 (APC): 2.9.1 & 2.9.2 — Seating & Access</div>
        <p class="para" style="font-size:10px; margin-bottom:6px;">Demonstrating 10 seats (1+1+8), 4 side doors, rear outward door, and roof escape hatch.</p>
        <div class="img-placeholder" onclick="promptImage(this)">
          <span>Click to insert/replace image<br/>(e.g., General Arrangement drawing)</span>
          <img src="" alt="" onerror="this.style.display='none'">
        </div>
      </div>
      <div class="img-box">
        <div class="img-title">Item 1 (APC): 2.9.4 — Firing Ports</div>
        <p class="para" style="font-size:10px; margin-bottom:6px;">Demonstrating configuration of 11 operational firing ports integrated into the armoring.</p>
        <div class="img-placeholder" onclick="promptImage(this)">
          <span>Click to insert/replace image<br/>(e.g., Side armor profile / Ports diagram)</span>
          <img src="" alt="" onerror="this.style.display='none'">
        </div>
      </div>
    </div>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addImageBox(this)">+ Add Image Box</button></div>

    <div class="img-grid">
      <div class="img-box">
        <div class="img-title">Item 2 (CAV): 2.9.1 & 2.9.2 — Seating & Doors</div>
        <p class="para" style="font-size:10px; margin-bottom:6px;">Demonstrating 5 seats (1+1+3), 4 forward hinge doors, and rear door access.</p>
        <div class="img-placeholder" onclick="promptImage(this)">
          <span>Click to insert/replace image<br/>(e.g., General Arrangement drawing)</span>
          <img src="" alt="" onerror="this.style.display='none'">
        </div>
      </div>
      <div class="img-box">
        <div class="img-title">Item 2 (CAV): 2.10 — Protection Cell</div>
        <p class="para" style="font-size:10px; margin-bottom:6px;">Reference for VPAM Edition 3 VR7 protective cell integration on commercial chassis.</p>
        <div class="img-placeholder" onclick="promptImage(this)">
          <span>Click to insert/replace image<br/>(e.g., Armoring Cell layout / Base structural limits)</span>
          <img src="" alt="" onerror="this.style.display='none'">
        </div>
      </div>
    </div>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addImageBox(this)">+ Add Image Box</button></div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page" id="vol4">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="vol-identifier">PART IV — ECONOMIC & FINANCIAL QUALIFICATION</div>
    <div class="main-heading">Part Summary Checklist</div>
    <table>
      <thead><tr><th style="width: 8%;">Ref. No</th><th style="width: 36%;">Details</th><th style="width: 8%;">Comply</th><th style="width: 24%;">MEVA Response</th><th style="width: 24%;">Supporting Documents</th></tr></thead>
      <tbody>
        <tr><td>4.1</td><td><strong>Audited Financial Statements (Last 2 Years)</strong><br><em style="font-size:9px; color:gray;">Balance Sheet, Income Statement, Auditor Report. Apostilled.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Audited financials attached.</td><td>Annex 4.1</td></tr>
        <tr><td>4.2</td><td><strong>Accountant Declaration of Ratios</strong><br><em style="font-size:9px; color:gray;">Must show: LG > 1, LC > 1, SG > 1. If not → Net Worth ≥ 10%.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Accountant declaration attached.</td><td>Annex 4.2</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>

    <div id="vol5" class="vol-identifier" style="margin-top: 30px;">PART V — COMMERCIAL PROPOSAL</div>
    <div class="main-heading">Commercial Terms & Pricing Logic</div>
    <table>
      <thead><tr><th style="width: 8%;">Ref. No</th><th style="width: 36%;">Details</th><th style="width: 8%;">Comply</th><th style="width: 24%;">MEVA Response</th><th style="width: 24%;">Supporting Documents</th></tr></thead>
      <tbody>
        <tr><td>5.1</td><td><strong>Annex IG – Commercial Proposal (Imported)</strong><br><em style="font-size:9px; color:gray;">Separate forms for Item 1 and Item 2 using equalized K value.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Forms populated and attached.</td><td>Annex 5.1</td></tr>
        <tr>
          <td id="item5-2" style="color:var(--brand-color); font-weight:700;">5.2</td>
          <td><strong>Commercial Pricing Schedule</strong><br><em style="font-size:9px; color:gray;">Unit Price, Total Batch Price, Customs & Duties equalization.</em></td>
          <td class="col-exec col-exec-tbd">TBD</td><td>Detailed schedule provided.</td><td>Pricing Annex</td>
        </tr>
        <tr><td>5.3</td><td><strong>PTAX Exchange Rate Declaration</strong><br><em style="font-size:9px; color:gray;">Using rate 3 business days before March 11, 2026.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Calculated and declared.</td><td>Annex 5.3</td></tr>
        <tr><td>5.4</td><td><strong>NCM Classification Declaration</strong><br><em style="font-size:9px; color:gray;">Confirm NCM 8710.00.00. Highlight ICMS, PIS, COFINS eq.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>NCM 8710.00.00 confirmed.</td><td>Annex 5.4</td></tr>
        <tr><td>5.5</td><td><strong>Incoterm Declaration</strong><br><em style="font-size:9px; color:gray;">Confirm DDP (preferred) or DPU (if justified).</em></td><td class="col-exec col-exec-tbd">TBD</td><td>DDP / DPU declared.</td><td>Annex 5.5</td></tr>
        <tr><td>5.6</td><td><strong>Letter of Credit Terms Declaration</strong><br><em style="font-size:9px; color:gray;">State LC timeframe, acceptance of risk, and costs.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>LC terms accepted.</td><td>Annex 5.6</td></tr>
        <tr><td>5.7</td><td><strong>Proposal Validity Declaration</strong><br><em style="font-size:9px; color:gray;">Minimum 180 days.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Valid for 180 days.</td><td>Annex 5.7</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>
    
    <div class="sub-heading" style="margin-top: 22px;">Reference Commercial & Contractual Terms (MEVA Standard)</div>
    <div class="text-muted" style="font-size: 12px; margin-bottom: 10px;">The following clauses are reference terms extracted from an MEVA proposal pack to help populate the commercial narrative. Where tender forms or public procurement terms differ, the tender requirements shall prevail.</div>
    <ul style="margin: 0 0 12px 18px; font-size:11px;">
      <li><strong>Payment:</strong> 100% advance (subject to tender acceptance) or LC per tender.</li>
      <li><strong>Account:</strong> Mahindra Emirates Vehicle Armouring FZ-LLC, Bank of Baroda Dubai (Swift: BARBAEADDEI).</li>
      <li><strong>Force Majeure:</strong> Delays due to acts beyond seller control.</li>
      <li>All declarations listed above are attached as formal annexures in PART VIII.</li>
    </ul>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page" id="vol6">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="vol-identifier">PART VI — SAMPLE & TESTING COMMITMENT</div>
    <div class="main-heading">Part Summary Checklist</div>
    <table>
      <thead><tr><th style="width: 8%;">Ref. No</th><th style="width: 36%;">Details</th><th style="width: 8%;">Comply</th><th style="width: 24%;">MEVA Response</th><th style="width: 24%;">Supporting Documents</th></tr></thead>
      <tbody>
        <tr><td>6.1</td><td><strong>Testing Schedule Commitment – APC</strong><br><em style="font-size:9px; color:gray;">Submit within 5 days if ranked first. Min 15-day notice.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Schedule commitment accepted.</td><td>Annex 6.1</td></tr>
        <tr><td>6.2</td><td><strong>Testing Schedule Commitment – CAV</strong><br><em style="font-size:9px; color:gray;">Submit within 5 days if ranked first. Min 15-day notice.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Schedule commitment accepted.</td><td>Annex 6.2</td></tr>
        <tr><td>6.3</td><td><strong>Testing Logistics Cost Undertaking</strong><br><em style="font-size:9px; color:gray;">Confirm covering travel for 4 PMES officers to UAE (flights, hotel).</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Logistics costs accepted.</td><td>Annex 6.3</td></tr>
        <tr><td>6.4</td><td><strong>Antenna Measurement Reports</strong><br><em style="font-size:9px; color:gray;">Required for APC & CAV. SWR at 46 MHz & 49 MHz.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Antenna reporting protocol accepted.</td><td>Annex 6.4</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>

    <div id="vol7" class="vol-identifier" style="margin-top: 30px;">PART VII — POST-CONTRACT COMMITMENTS</div>
    <div class="main-heading">Part Summary Checklist</div>
    <table>
      <thead><tr><th style="width: 8%;">Ref. No</th><th style="width: 36%;">Details</th><th style="width: 8%;">Comply</th><th style="width: 24%;">MEVA Response</th><th style="width: 24%;">Supporting Documents</th></tr></thead>
      <tbody>
        <tr><td>5.11</td><td><strong>Warranty Schedule</strong><br><em style="font-size:9px; color:gray;">Opaque/Transparent Shielding: 60 months. Engine/Gearbox, Comms, Mod Deficiencies, Prev. Maint: Per Table.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>60-month shielding warranty confirmed.</td><td>Annex 7.1</td></tr>
        <tr><td>7.1</td><td><strong>Warranty & After-Sales Plan</strong><br><em style="font-size:9px; color:gray;">60 day repair max, 10-year spares, 1% spare reserve, recall ref.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Warranty plan provided.</td><td>Annex 7.1</td></tr>
        <tr><td>7.2</td><td><strong>Operator Training Plan</strong><br><em style="font-size:9px; color:gray;">20 hours in ES, Portuguese, max 10 per class.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Training syllabus attached.</td><td>Annex 7.2</td></tr>
        <tr><td>7.3</td><td><strong>Subcontracting Declaration</strong><br><em style="font-size:9px; color:gray;">Max 30% (maintenance only). Or declare none.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Declaration provided.</td><td>Annex 7.3</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>
    
    <div class="sub-heading" style="margin-top: 22px;">Proposed Warranty & Support Terms (Reference)</div>
    <div class="text-muted" style="font-size: 12px; margin-bottom: 10px;">Reference warranty terms extracted from an MEVA proposal pack. Final warranty commitments will be aligned to the tender contract requirements.</div>
    <ul style="margin: 0 0 10px 18px; font-size:11px;">
      <li><strong>Authorized Repairs:</strong> May be performed locally with MEVA approval.</li>
      <li><strong>Limitations:</strong> No liability for use outside parameters, misuse, abuse, or unauthorized mods.</li>
      <li><strong>Shipment Docs:</strong> Subject to EUC, NOC, and export license (MOFA).</li>
      <li>All commitment declarations are attached as formal annexures in PART VIII.</li>
    </ul>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page" id="item6-5">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="vol-identifier">PART VI — SAMPLE & TESTING COMMITMENT</div>
    <div class="main-heading">6.5 Acceptance Test Compliance Statement – APC (Annex IC)</div>
    <div class="info-box note" style="margin-bottom: 16px;">
      <strong>Commitment:</strong> Confirms vehicle will undergo Annex IC tests. Mahindra Emirates Vehicle Armouring FZ-LLC confirms full acceptance of the ATP for Item 1 exactly as defined. The contractor commits to present sample vehicles and designate specialized personnel.
    </div>

    <div class="sub-heading" style="margin-top: 0;">PHASE 1 – BEFORE DRIVING</div>
    <table>
      <thead><tr><th class="col-order" style="width:5%">#</th><th style="width:45%">Activity Description (per Tender)</th><th class="col-exec" style="width:15%">Compliance</th><th class="col-obs" style="width:35%">Method of Fulfillment</th></tr></thead>
      <tbody>
        <tr><td class="col-order">1</td><td>Presentation of vehicles (samples) and personnel designation</td><td class="col-exec">YES</td><td>Samples and MEVA staff present</td></tr>
        <tr><td class="col-order">2</td><td>Identification of vehicles to be inspected</td><td class="col-exec">YES</td><td>VIN/chassis verification</td></tr>
        <tr><td class="col-order">3</td><td>Familiarization with documentation (manuals, prep docs)</td><td class="col-exec">YES</td><td>Full dossier provided</td></tr>
        <tr><td class="col-order">4</td><td>Visual inspection of body, interior, and exterior</td><td class="col-exec">YES</td><td>Vehicle delivered operational</td></tr>
        <tr><td class="col-order">5</td><td>Verification of technical specification data</td><td class="col-exec">YES</td><td>Matrix cross-reference</td></tr>
        <tr><td class="col-order">6</td><td>Pre-departure maintenance and operating instructions</td><td class="col-exec">YES</td><td>Technical briefing provided</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>

    <div class="sub-heading">PHASE 2 – DURING DRIVING (ROAD TEST)</div>
    <table>
      <thead><tr><th class="col-order" style="width:5%">#</th><th style="width:45%">Activity Description (50 km route)</th><th class="col-exec" style="width:15%">Compliance</th><th class="col-obs" style="width:35%">Method of Fulfillment</th></tr></thead>
      <tbody>
        <tr><td class="col-order">7</td><td>Safety briefing prior to road test</td><td class="col-exec">YES</td><td>Conducted by MEVA engineer</td></tr>
        <tr><td class="col-order">8</td><td>Driving on paved roads/highways</td><td class="col-exec">YES</td><td>Compliant road operation</td></tr>
        <tr><td class="col-order">9</td><td>Observation of performance (engine, transmission, brakes)</td><td class="col-exec">YES</td><td>Systems verified</td></tr>
        <tr><td class="col-order">10</td><td>Driving on off-road test track/proving ground</td><td class="col-exec">YES</td><td>4x4/Suspension validated</td></tr>
        <tr><td class="col-order">11</td><td>Testing of all vehicle systems during operation</td><td class="col-exec">YES</td><td>Functional verification</td></tr>
        <tr><td class="col-order">12</td><td>Evaluation of drivability and ergonomics</td><td class="col-exec">YES</td><td>Configured per requirements</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>

    <div class="sub-heading">PHASE 3 – AFTER DRIVING (STATIC INSPECTION)</div>
    <table>
      <thead><tr><th class="col-order" style="width:5%">#</th><th style="width:45%">Activity Description</th><th class="col-exec" style="width:15%">Compliance</th><th class="col-obs" style="width:35%">Method of Fulfillment</th></tr></thead>
      <tbody>
        <tr><td class="col-order">13</td><td>Inspection for leaks, play, or damage after road testing</td><td class="col-exec">YES</td><td>Final inspection protocol</td></tr>
        <tr><td class="col-order">14</td><td>Final technical meeting with client for evaluation</td><td class="col-exec">YES</td><td>Contractor participation</td></tr>
        <tr><td class="col-order">15</td><td>Consolidation of final report</td><td class="col-exec">YES</td><td>Formal response commitment</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page" id="item6-6">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="vol-identifier">PART VI — SAMPLE & TESTING COMMITMENT</div>
    <div class="main-heading">6.6 Acceptance Test Compliance Statement – CAV (Annex IE)</div>
    <div class="info-box note" style="margin-bottom: 16px;">
      <strong>Commitment:</strong> Confirms Annex IE testing. Mahindra Emirates Vehicle Armouring FZ-LLC confirms that the armored tactical SUV (Item 2) complies with Appendix ID. The contractor formally accepts execution of the ATP.
    </div>

    <div class="sub-heading" style="margin-top: 0;">PHASE 1 – BEFORE DRIVING</div>
    <table>
      <thead><tr><th class="col-order" style="width:5%">#</th><th style="width:45%">Activity Description</th><th class="col-exec" style="width:15%">Compliance</th><th class="col-obs" style="width:35%">Method of Fulfillment</th></tr></thead>
      <tbody>
        <tr><td class="col-order">1</td><td>Presentation of vehicles and designation of specialized employees</td><td class="col-exec">YES</td><td>Sample vehicle(s) and MEVA personnel present</td></tr>
        <tr><td class="col-order">2</td><td>Identification of vehicles to be inspected as samples</td><td class="col-exec">YES</td><td>VIN/chassis identification provided</td></tr>
        <tr><td class="col-order">3</td><td>Familiarization with documentation (operating, maintenance, etc.)</td><td class="col-exec">YES</td><td>Complete documentation provided</td></tr>
        <tr><td class="col-order">4</td><td>Visual inspection of body, interior/exterior for structural integrity</td><td class="col-exec">YES</td><td>Vehicle delivered assembled</td></tr>
        <tr><td class="col-order">5</td><td>Verification of technical specification data prior to departure</td><td class="col-exec">YES</td><td>Compliance matrix cross-referenced</td></tr>
        <tr><td class="col-order">6</td><td>Pre-departure maintenance and vehicle operating instructions</td><td class="col-exec">YES</td><td>Technical briefing provided</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>

    <div class="sub-heading">PHASE 2 – DURING DRIVING (ROAD TEST)</div>
    <table>
      <thead><tr><th class="col-order" style="width:5%">#</th><th style="width:45%">Activity Description (50 km route)</th><th class="col-exec" style="width:15%">Compliance</th><th class="col-obs" style="width:35%">Method of Fulfillment</th></tr></thead>
      <tbody>
        <tr><td class="col-order">7</td><td>Safety briefing prior to road test</td><td class="col-exec">YES</td><td>Conducted by MEVA engineer</td></tr>
        <tr><td class="col-order">8</td><td>Driving on paved roads/highways up to 50 km</td><td class="col-exec">YES</td><td>Designed for highway operation</td></tr>
        <tr><td class="col-order">9</td><td>Observation of performance (engine, transmission, braking)</td><td class="col-exec">YES</td><td>Systems verified</td></tr>
        <tr><td class="col-order">10</td><td>Driving on off-road track to verify remaining technical data</td><td class="col-exec">YES</td><td>4WD and suspension validated</td></tr>
        <tr><td class="col-order">11</td><td>Testing of all vehicle systems on paved and off-road terrain</td><td class="col-exec">YES</td><td>Functional verification</td></tr>
        <tr><td class="col-order">12</td><td>Evaluation of drivability, ergonomics and operational aspects</td><td class="col-exec">YES</td><td>Configured per requirements</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>

    <div class="sub-heading">PHASE 3 – AFTER DRIVING (STATIC INSPECTION)</div>
    <table>
      <thead><tr><th class="col-order" style="width:5%">#</th><th style="width:45%">Activity Description</th><th class="col-exec" style="width:15%">Compliance</th><th class="col-obs" style="width:35%">Method of Fulfillment</th></tr></thead>
      <tbody>
        <tr><td class="col-order">13</td><td>Inspection for leaks, play, damage or operational issues</td><td class="col-exec">YES</td><td>Final inspection protocol</td></tr>
        <tr><td class="col-order">14</td><td>Final meeting with client to analyze post-test findings</td><td class="col-exec">YES</td><td>Contractor participation</td></tr>
        <tr><td class="col-order">15</td><td>Consolidation of final report and contractor positioning</td><td class="col-exec">YES</td><td>Formal cooperation commitment</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page" id="final-declarations">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="vol-identifier">FINAL DECLARATIONS & SIGNATURES</div>
    
    <div class="trace" style="background:#f1f5f9; padding: 10px; border: 1px solid var(--border-color); font-size: 11px; margin-bottom: 20px;">
      <strong>Traceability Header:</strong> &nbsp;
      <span>Item: ☐ Item 1 (APC) ☐ Item 2 (CAV) &nbsp; | &nbsp; VIN/Chassis: __________________________</span>
    </div>

    <div id="annex2" class="main-heading">Compliance with Annex II – Responsibilities of the Testing Committee</div>
    <p class="para">Mahindra Emirates Vehicle Armouring FZ-LLC acknowledges and accepts the provisions of Annex II regarding:</p>
    <ul class="check-list" style="column-count: 2; column-gap: 20px;">
      <li>Purpose and exclusive technical competence</li>
      <li>Nature and scope of activity</li>
      <li>Prohibition of commercial negotiation</li>
      <li>Composition of the Commission</li>
      <li>Technical planning authority</li>
      <li>Audit and data recording authority</li>
      <li>Incident recording and documentation</li>
      <li>Issuance of Conclusive Technical Opinion</li>
      <li>Quorum requirements</li>
      <li>Security and public session rules</li>
      <li>Evidence recording and traceability</li>
      <li>Interface limitations</li>
    </ul>
    
    <div class="info-box note">
      <strong>Contractor confirms:</strong> Full cooperation with strictly technical role. No commercial negotiations during testing. All facilities/equipment will be available. Operational assistance will not interfere with fairness. Traceability guaranteed.
    </div>

    <div id="signatures" class="main-heading" style="margin-top: 24px;">Traceability Checklist (Common)</div>
    <table>
      <thead>
        <tr><th style="width:60%;">Traceability Element</th><th style="width:10%;">Provided</th><th style="width:30%;">Reference / Location</th></tr>
      </thead>
      <tbody>
        <tr><td>VIN/Chassis (or equivalent identifier)</td><td class="col-exec">YES</td><td>Traceability Header</td></tr>
        <tr><td>Engine number (when applicable)</td><td class="col-exec">YES</td><td>Delivery dossier</td></tr>
        <tr><td>Serial numbers of relevant components (armor, glass, systems)</td><td class="col-exec">YES</td><td>Annex certificates</td></tr>
        <tr><td>Linking to required tax documentation and reports/certificates</td><td class="col-exec">YES</td><td>Invoice / Annex ref</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>

    <div class="main-heading" style="margin-top: 24px;">Commitment Declaration & Signatures</div>
    <p class="para" style="font-size: 11px;">
      Mahindra Emirates Vehicle Armouring FZ-LLC hereby formally declares full acceptance of the Acceptance Testing Procedure (ATP) for both Item 1 and Item 2. The bidder commits to present sample vehicles, provide qualified technical personnel, allow dynamic road testing up to 50 km, provide complete documentation, cooperate with the Testing Committee in the issuance of the Conclusive Technical Opinion, and comply fully with Annex II regarding the authority and procedures of the Testing Committee. This declaration remains binding upon contract award.
    </p>
    
    <div class="sig-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      <div class="sig-box" style="border:1px solid var(--border-color); padding:15px; border-radius:4px;">
        <div class="sig-badge" style="font-size:10px; font-weight:800; color:var(--brand-color); margin-bottom:10px;">BIDDER</div>
        <div class="small" style="font-size:11px; margin-bottom:15px;">
          <strong>Company:</strong> Mahindra Emirates Vehicle Armouring FZ-LLC<br/>
          <strong>Document:</strong> Part VI Acceptance Tests Undertaking<br/>
          <strong>Applicability:</strong> Common + Item 1 (APC) + Item 2 (CAV)
        </div>
        <div class="sig-line" style="font-size:12px;">
          Authorized Signatory: __________________________<br/><br/>
          Name: __________________________<br/><br/>
          Title: __________________________<br/><br/>
          Date: ____ / ____ / ______<br/><br/>
          Company Stamp:
        </div>
      </div>

      <div class="sig-box" style="border:1px dashed var(--border-color); padding:15px; border-radius:4px;">
        <div class="sig-badge" style="font-size:10px; font-weight:800; color:var(--text-muted); margin-bottom:10px;">WITNESS / INTERNAL CONTROL</div>
        <div class="small" style="color:var(--text-muted); font-size:11px; margin-bottom:15px;">
          Optional internal witness for submission pack control (recommended for traceability assurance).<br/>
          This does not replace PMES Testing Committee records.
        </div>
        <div class="sig-line" style="font-size:12px;">
          Reviewer: __________________________<br/><br/>
          Name: __________________________<br/><br/>
          Title/Dept: __________________________<br/><br/>
          Date: ____ / ____ / ______<br/><br/>
          Signature:
        </div>
      </div>
    </div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page" id="vol8">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="vol-identifier">PART VIII — ANNEXURES & CERTIFICATES</div>
    <div class="main-heading">Annexure Index</div>
    <p class="para">The following pages contain the formal certificates and documentation referenced throughout Parts I - VII.</p>
    
    <table>
      <thead>
        <tr><th style="width: 15%;">Ref</th><th style="width: 85%;">Certificate / Document Name</th></tr>
      </thead>
      <tbody>
        <tr><th colspan="2" class="group-header">Administrative & Legal (Part I)</th></tr>
        <tr><td>Annex 1.1</td><td>Bid Cover Letter</td></tr>
        <tr><td>Annex 1.2</td><td>Corporate Legal Existence Documents (Trade License, MoA, Apostille)</td></tr>
        <tr><td>Annex 1.3</td><td>Power of Attorney – Brazilian Legal Representative</td></tr>
        <tr><td>Annex 1.4</td><td>Declarations Required by Law 14.133/2021</td></tr>
        <tr><td>Annex 1.5</td><td>Declaration of Non-Existence of Equivalent Document</td></tr>

        <tr><th colspan="2" class="group-header">Tax, Social & Labor Qualification (Part II)</th></tr>
        <tr><td>Annex 2.1</td><td>UAE Tax Registration Certificate (FTA – TRN)</td></tr>
        <tr><td>Annex 2.2</td><td>UAE Tax Compliance Certificate</td></tr>
        <tr><td>Annex 2.3</td><td>Labor Compliance Certificate</td></tr>
        <tr><td>Annex 2.4</td><td>Bankruptcy / Insolvency Certificate</td></tr>

        <tr><th colspan="2" class="group-header">Technical Qualification (Part III)</th></tr>
        <tr><td>Annex 3.1</td><td>Technical-Operational Capacity Certificate(s)</td></tr>
        <tr><td>Annex 3.2</td><td>Proof of Project Maturity</td></tr>
        <tr><td>Annex 3.3</td><td>Manufacturer Letter of Solidarity</td></tr>
        <tr><td>Annex 3.5</td><td>Ballistic Certification – APC</td></tr>
        <tr><td>Annex 3.6</td><td>Underbody Protection Certification – APC</td></tr>
        <tr><td>Annex 3.8</td><td>Ballistic Certification – CAV</td></tr>

        <tr><th colspan="2" class="group-header">Economic & Financial (Part IV)</th></tr>
        <tr><td>Annex 4.1</td><td>Audited Financial Statements (Last 2 Years)</td></tr>
        <tr><td>Annex 4.2</td><td>Accountant Declaration of Ratios</td></tr>

        <tr><th colspan="2" class="group-header">Commercial & Commitments (Part V, VI, VII)</th></tr>
        <tr><td>Annex 5.1</td><td>Annex IG – Commercial Proposal</td></tr>
        <tr><td>Annex 5.3-5.7</td><td>Commercial Declarations (PTAX, NCM, Incoterm, LC, Validity)</td></tr>
        <tr><td>Annex 6.1-6.4</td><td>Testing & Antenna Commitments</td></tr>
        <tr><td>Annex 7.1-7.3</td><td>Warranty, Training, and Subcontracting Plans</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button></div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page cert-page">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="main-heading cert-title">Annex: [Document Name]</div>
    <div class="cert-placeholder" contenteditable="false" style="text-align:center; padding: 40px; border: 2px dashed var(--border-color); border-radius: 8px; margin-top: 20px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="var(--text-muted)" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
      <h4 style="margin: 10px 0; color: var(--text-main);">Attach Document: [Name]</h4>
      <p style="color: var(--text-muted); font-size: 12px; margin: 0;">Please append the relevant physical document here before final submission.</p>
    </div>
    <div class="doc-controls-wrapper" style="justify-content:center; margin-top:16px; width: 100%; display: flex;" contenteditable="false">
      <button class="doc-control" onclick="addCertificate(this)" style="border: none;">+ Duplicate Certificate Page</button>
    </div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>
`;

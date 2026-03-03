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
      <a href="#apc-evidence" class="toc-sublink">↳ ITEM 1 – APC: Supporting Evidence & Images</a><br>
      <a href="#item3-7" class="toc-sublink">↳ ITEM 2 – CAV: Technical Compliance Matrix</a><br>
      <a href="#cav-evidence" class="toc-sublink">↳ ITEM 2 – CAV: Supporting Evidence & Images</a><br>
      <a href="#vol4" class="toc-link">PART IV — ECONOMIC & FINANCIAL QUALIFICATION</a><br>
      <a href="#vol5" class="toc-link">PART V — COMMERCIAL PROPOSAL</a><br>
      <a href="#vol6" class="toc-link">PART VI — SAMPLE & TESTING COMMITMENT</a><br>
      <a href="#item6-5" class="toc-sublink">↳ Acceptance Test Compliance Statement (APC & CAV)</a><br>
      <a href="#vol7" class="toc-link">PART VII — POST-CONTRACT COMMITMENTS</a><br>
      <div class="toc-divider"></div>
      <a href="#final-declarations" class="toc-link">FINAL DECLARATIONS & SIGNATURES</a><br>
      <a href="#annex2" class="toc-sublink">↳ Compliance with Annex II (Testing Committee) & Traceability</a><br>
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
        <tr><td>1.1.1</td><td>Acquisition of a light armored operational vehicle for the transport of 10 (ten) operational military personnel (driver; commander + 8).</td><td class="col-exec col-exec-tbd">TBD</td><td>Offered vehicle transports 1+1+8.</td><td>Tech Offer / Drawings</td></tr>
        <tr><td>1.1.2</td><td>Manufactured in 2024 or later, never used, 0 (zero) kilometer condition, guaranteed by mfg.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm 2024+ and 0 km.</td><td>Mfg Declaration</td></tr>
        <tr><td>1.1.3</td><td>Adaptations for signaling, comms, and transceivers may be installed in BR at specified location.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirmed installation support.</td><td>Contractual Statement</td></tr>

        <tr><th colspan="5" class="group-header">2.1 CHASSIS & 2.2 ENGINE</th></tr>
        <tr><td>2.1.1</td><td>Chassis: Mounted on a commercial chassis and reinforced with capacity to support armored structure.</td><td class="col-exec col-exec-tbd">TBD</td><td>Reinforced commercial chassis used.</td><td>OEM Chassis Specs</td></tr>
        <tr><td>2.2.1</td><td>Engine type: Internal combustion, turbo diesel, Euro 4 or higher.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm turbo diesel Euro 4+.</td><td>OEM Engine Specs</td></tr>
        <tr><td>2.2.2</td><td>Power: 300 HP.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm 300 HP.</td><td>OEM Engine Specs</td></tr>
        <tr><td>2.2.3</td><td>Torque: Minimum torque 1,000 Nm / 1,200 to 2,200 rpm.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm torque meets/exceeds req.</td><td>OEM Torque Curve</td></tr>

        <tr><th colspan="5" class="group-header">2.3 TRANSMISSION, STEERING, BRAKES & SUSPENSION</th></tr>
        <tr><td>2.3.1</td><td>Gearbox: Auto transmission, min 6 fwd + 1 rev, torque converter, electronic management.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm gearbox spec.</td><td>OEM Transmission Specs</td></tr>
        <tr><td>2.3.2</td><td>Wheel drive: 4X4 part-time; real-time electronic transfer case; auto/manual freewheel.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm 4x4 drivetrain spec.</td><td>OEM Drivetrain Specs</td></tr>
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
        <tr><td>2.3.3</td><td>Brakes: a) ABS on all wheels + EBD; b) Ventilated discs; c) Service brake holds 60% of weight; d) ESP activatable inside cabin.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm brake / ESP specs.</td><td>OEM Brake Specs</td></tr>
        <tr><td>2.3.4</td><td>Direction: a) Hydr/electric; b) Original factory LHD.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm LHD steering.</td><td>OEM Specs</td></tr>
        <tr><td>2.3.5</td><td>Suspension: Axles reinforced to meet military requirements.</td><td class="col-exec col-exec-tbd">TBD</td><td>Heavy duty military axles.</td><td>Suspension Upgrade Doc</td></tr>

        <tr><th colspan="5" class="group-header">2.4 ELECTRICAL, LIGHTING & AC</th></tr>
        <tr><td>2.4.1</td><td>Electrical: a) Compatible capacity; b/c/d) Packaged/insulated wiring, ABNT 5410 compliant; e) 12V; f) At least two 12V batteries.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm wiring and dual 12V setup.</td><td>Electrical Schematic</td></tr>
        <tr><td>2.4.2</td><td>Lighting: LED headlights and LED interior/exterior lamps.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm full LED spec.</td><td>Lighting Specs</td></tr>
        <tr><td>2.4.3</td><td>Air Con: a/b) Cools cabin in >50°C environment without affecting engine; c) Hot and cold air.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm heavy duty HVAC.</td><td>HVAC Specs</td></tr>

        <tr><th colspan="5" class="group-header">2.5 PERFORMANCE, 2.6 DIMENSIONS & 2.7 WEIGHT</th></tr>
        <tr><td>2.5.1-3</td><td>Fuel tank 200L (S10 Diesel); Min range 500 km.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm tank and range.</td><td>Spec Sheet</td></tr>
        <tr><td>2.5.4-5</td><td>Wheels/Tires: 18”+ rim; Run Flat on all tires (incl spare). Performance: Cruise 90 km/h; Max 100 km/h.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm Runflats and speed.</td><td>Runflat Cert / Specs</td></tr>
        <tr><td>2.6.1-5</td><td>Dim: L ≤7000mm, W ≤3000mm, H ≤3000mm, WB ≤3600mm, Ground Clear ≥250mm.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm dimensions.</td><td>GA Drawing</td></tr>
        <tr><td>2.7.1-3</td><td>Weight: GVWR ≤12000kg, Curb ≤10000kg, Payload ≥1500kg.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm weights.</td><td>Weight Statement</td></tr>

        <tr><th colspan="5" class="group-header">2.8 DRIVING CHAR. & 2.9 CONFIGURATION</th></tr>
        <tr><td>2.8.1</td><td>Ascent 50%; tilt 30º; approach 30º; departure 30º.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm angles & grades.</td><td>Mobility Specs</td></tr>
        <tr><td>2.9.1-2</td><td>Seats for 10 (1+1+8) with belts. 4 side doors, 1 rear door (outward), 1 roof hatch, exterior running boards.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm 10 seats & access.</td><td>Layout Drawing</td></tr>
        <tr><td>2.9.3-5</td><td>11 windows (split windshield, side doors, rear) w/ blinds. 11 firing ports. Manual key locks.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm windows & ports.</td><td>Armoring Specs</td></tr>

        <tr><th colspan="5" class="group-header">2.10 BALLISTICS & 2.11 GRAPHICS</th></tr>
        <tr><td>2.10</td><td>Police protection cell CEN BR 7 (Opaque/Transparent/Loopholes). Floor blast (DM51x2, HG85, DM31). Engine/radiator protection 7.62 NATO 60°N.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm CEN BR 7 & Blast protection.</td><td>Ballistic/Blast Certs</td></tr>
        <tr><td>2.11</td><td>Graphics: CIELAB Standard Color Space compliant. PMES stickers applied.</td><td class="col-exec col-exec-tbd">TBD</td><td>Acknowledge PMES livery standard.</td><td>Paint Spec</td></tr>

        <tr><th colspan="5" class="group-header">2.12 MANUALS, ACCESSORIES & 2.13 ACOUSTICS</th></tr>
        <tr><td>2.12</td><td>Accessories: 4 ext cameras, AM/FM radio, lifting tools, 4000kg front winch, electric mirrors. Manuals in PT. Training: 20 hrs locally.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm acc. & training delivery.</td><td>Equipment List</td></tr>
        <tr><td>2.13</td><td>Siren: min 100W, 110 dB @ 1m, 3 tones, hidden installation, sealed driver, no RF interference.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm siren spec.</td><td>Siren Spec / Report</td></tr>

        <tr><th colspan="5" class="group-header">2.14 VISUAL SIGNALING & 2.15/2.16 COMMS</th></tr>
        <tr><td>2.14</td><td>Visual: Weather resistant, PWM load management. Colors per SAE J595. Roof Lightbar (>90% width) with specific animations (ROUND, QTI, STOP, EMERGENCY). Secondary Grille/Rear modules. Traffic Advisor. 1-DIN Control Panel.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm lighting and panel functions.</td><td>Lighting Spec / Certs</td></tr>
        <tr><td>2.15</td><td>TETRA Prep: 5A fused cable, Multifunction roof antenna (GPS/GSM/3G/WLAN/TETRA), IP66, 380-400 MHz (TETRA).</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm TETRA prep & specs.</td><td>Antenna Datasheet</td></tr>
        <tr><td>2.16</td><td>Analog Prep (PRO5100): Remote mount kit prep. VHF Antenna (46-49 MHz, 50 Ohms, SWR ≤ 1.5:1). Cable RG58C. Impedance/SWR report required.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm Analog prep & SWR limits.</td><td>Antenna Report</td></tr>
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

<div class="page" id="apc-evidence">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="main-heading">Visual References & Equipment Configuration (APC)</div>
    <p class="para">The following technical diagrams and visual evidence corroborate the specifications detailed in Annex IB.</p>

    <div class="img-grid">
      <div class="img-box">
        <div class="img-title">2.9.1 & 2.9.2 — Seating Layout & Access</div>
        <p class="para" style="font-size:10px; margin-bottom:6px;">Demonstrating 10 seats (1+1+8), 4 side doors, rear outward door, and roof escape hatch.</p>
        <div class="img-placeholder" onclick="promptImage(this)">
          <span>Click to insert/replace image<br/>(e.g., General Arrangement drawing)</span>
          <img src="" alt="" onerror="this.style.display='none'">
        </div>
      </div>
      <div class="img-box">
        <div class="img-title">2.9.4 — Firing Ports (Loopholes)</div>
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
        <div class="img-title">2.10 — Ballistic & Blast Protection Base</div>
        <p class="para" style="font-size:10px; margin-bottom:6px;">Reference for Police protection cell (CEN BR 7) and certified underbody blast integration.</p>
        <div class="img-placeholder" onclick="promptImage(this)">
          <span>Click to insert/replace image<br/>(e.g., Ballistic Cell / Chassis reinforcement)</span>
          <img src="" alt="" onerror="this.style.display='none'">
        </div>
      </div>
      <div class="img-box">
        <div class="img-title">2.14 — Visual Signaling (Lightbar System)</div>
        <p class="para" style="font-size:10px; margin-bottom:6px;">Demonstrating LED lightbar, grille modules, and strobe placement per PMES standard.</p>
        <div class="img-placeholder" onclick="promptImage(this)">
          <span>Click to insert/replace image<br/>(e.g., Lighting & Siren configuration)</span>
          <img src="" alt="" onerror="this.style.display='none'">
        </div>
      </div>
    </div>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addImageBox(this)">+ Add Image Box</button></div>

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
        <tr>
          <th style="width:8%">Ref. No</th>
          <th style="width:36%">Details</th>
          <th style="width:8%">Comply</th>
          <th style="width:24%">MEVA Response</th>
          <th style="width:24%">Supporting Documents</th>
        </tr>
      </thead>
      <tbody>
        <tr><th colspan="5" class="group-header">1. OBJECT</th></tr>
        <tr><td>1.1.1</td><td>Acquisition of armored tactical SUV for transport of 05 military personnel (1 driver + 1 cmdr + 3).</td><td class="col-exec col-exec-tbd">TBD</td><td>Offer SUV for 5 personnel.</td><td>Tech Offer Cover</td></tr>
        <tr><td>1.1.2</td><td>Manufactured 2024+; never used; 0 km condition; mfg guarantee.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm 2024+ and 0 km.</td><td>Mfg Declaration</td></tr>

        <tr><th colspan="5" class="group-header">2.1 CHASSIS & 2.2 ENGINE</th></tr>
        <tr><td>2.1.1</td><td>Chassis: Mounted on a commercial chassis and reinforced to support armored structure.</td><td class="col-exec col-exec-tbd">TBD</td><td>Reinforced commercial SUV chassis.</td><td>OEM Chassis Specs</td></tr>
        <tr><td>2.2.1-2</td><td>Engine type: Turbo diesel, Euro 4+, Power 300 HP.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm Euro 4+ & 300 HP.</td><td>OEM Engine Specs</td></tr>
        <tr><td>2.2.3</td><td>Torque: Minimum 700 Nm / 1,500 to 2,700 rpm.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm torque output.</td><td>OEM Torque Curve</td></tr>

        <tr><th colspan="5" class="group-header">2.3 TRANSMISSION, STEERING, BRAKES & SUSPENSION</th></tr>
        <tr><td>2.3.1</td><td>Gearbox: Auto transmission, min 6 fwd + 1 rev, torque converter, electronic management.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm gearbox.</td><td>OEM Trans Specs</td></tr>
        <tr><td>2.3.2</td><td>Wheel drive: Full-time 4WD; 4x4 part-time electronic transfer box; real-time.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm 4WD spec.</td><td>OEM Drivetrain Specs</td></tr>
        <tr><td>2.3.3</td><td>Brakes: ABS + EBD; Ventilated discs; Service brake holds 60%; ESP active from cabin.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm brake / ESP specs.</td><td>OEM Brake Specs</td></tr>
        <tr><td>2.3.4</td><td>Direction: Hydr/electric; Original factory LHD.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm LHD steering.</td><td>OEM Specs</td></tr>
        <tr><td>2.3.5</td><td>Suspension: Axles reinforced to meet military requirements.</td><td class="col-exec col-exec-tbd">TBD</td><td>Heavy duty military axles.</td><td>Suspension Upgrade Doc</td></tr>

        <tr><th colspan="5" class="group-header">2.4 ELECTRICAL, LIGHTING & AC</th></tr>
        <tr><td>2.4.1</td><td>Electrical: Compatible capacity, packaged/insulated wiring, 12V, at least two 12V batteries.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm 12V dual battery spec.</td><td>Elec Schematic</td></tr>
        <tr><td>2.4.2</td><td>Lighting: LED headlights; LED interior/exterior lamps; LED/halogen ceiling light.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm lighting setup.</td><td>Lighting Specs</td></tr>
        <tr><td>2.4.3</td><td>Air Con: Cooling/ventilation front+rear, cools cabin in >50°C environments, hot & cold air.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm high-cap HVAC.</td><td>HVAC Specs</td></tr>
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
        <tr><td>2.5.1-3</td><td>Fuel tank 110L (S10); Min range 700 km fully charged.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm tank & range.</td><td>Spec Sheet</td></tr>
        <tr><td>2.5.4-5</td><td>Wheels/Tires: 18”+ rim; Run Flat all tires. Perf: Cruise 90 km/h; Max 120 km/h.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm Runflats and speed.</td><td>Runflat Cert / Specs</td></tr>
        <tr><td>2.6.1-5</td><td>Dim: L ≤5500mm, W ≤2000mm, H ≤2000mm, WB ≤3000mm, Ground Clear ≥220mm.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm dimensions.</td><td>GA Drawing</td></tr>
        <tr><td>2.7.1-3</td><td>Weight: GVWR ≤6000kg, Curb ≤5000kg, Payload ≥1000kg.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm weights.</td><td>Weight Statement</td></tr>

        <tr><th colspan="5" class="group-header">2.8 DRIVING CHAR. & 2.9 CONFIGURATION</th></tr>
        <tr><td>2.8.1</td><td>Ascent 50%; tilt 30º; approach 30º; departure 20º.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm angles.</td><td>Mobility Specs</td></tr>
        <tr><td>2.9.1-2</td><td>Seats for 5 (1+1+3) w/ belts. 4 side doors (forward hinge), 1 rear door for boarding.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm seating & access.</td><td>Layout Drawing</td></tr>
        <tr><td>2.9.3-4</td><td>7 replaceable windows (1-piece windshield, side doors, rear) + 1 roof hatch. Manual/Alarm locks.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm glass & hatch.</td><td>Armoring Specs</td></tr>

        <tr><th colspan="5" class="group-header">2.10 BALLISTICS & 2.11 GRAPHICS</th></tr>
        <tr><td>2.10</td><td>Protection cell VPAM EDITION 3 VR7 (glazed areas, floor, engine/radiator). Front mudguards, critical components protected.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm VPAM VR7 integration.</td><td>VPAM VR7 Certs</td></tr>
        <tr><td>2.11</td><td>Graphics: CIELAB Standard compliant. Unmarked vehicles must be metallic/solid/pearlescent.</td><td class="col-exec col-exec-tbd">TBD</td><td>Acknowledge paint options.</td><td>Paint Spec</td></tr>

        <tr><th colspan="5" class="group-header">2.12 MANUALS, ACC. & 2.13 ACOUSTICS</th></tr>
        <tr><td>2.12</td><td>Color reverse camera, AM/FM radio, lifting tools, electric mirrors. Manuals in PT.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm accessories.</td><td>Equipment List</td></tr>
        <tr><td>2.13</td><td>Siren: min 100W, 110 dB @ 1m, 3 tones, hidden installation, sealed driver, no RF interference.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm siren spec.</td><td>Siren Spec / Report</td></tr>

        <tr><th colspan="5" class="group-header">2.14, 2.15 & 2.16 VISUAL, COMMS & LIGHTING ASSY</th></tr>
        <tr><td>2.14</td><td>Visual Signaling: Weather resistant, PWM load mgmt. Roof Lightbar (>90% width) with animations. Alley lights (min 1500 lumens). Traffic Advisor. 1-DIN Control Panel.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm signaling and panel.</td><td>Lighting Spec</td></tr>
        <tr><td>2.15</td><td>Comms Prep: TETRA prep (Multifunction roof antenna IP66) + Analog PRO5100 prep (VHF antenna SWR ≤ 1.5:1).</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm antenna prep & SWR.</td><td>Antenna Report</td></tr>
        <tr><td>2.16</td><td>Unmarked Lighting Assy: Front primary (inside windshield), Rear primary (inside rear window), Secondary grille (smoked lens), Magnetic Emblems.</td><td class="col-exec col-exec-tbd">TBD</td><td>Confirm unmarked light specs.</td><td>Lighting Spec</td></tr>
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

<div class="page" id="cav-evidence">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="main-heading">Visual References & Equipment Configuration (CAV)</div>
    <p class="para">The following technical diagrams and visual evidence corroborate the specifications detailed in Annex ID.</p>

    <div class="img-grid">
      <div class="img-box">
        <div class="img-title">2.9.1 & 2.9.2 — Seating Layout & Doors</div>
        <p class="para" style="font-size:10px; margin-bottom:6px;">Demonstrating 5 seats (1+1+3), 4 forward hinge doors, and rear door access.</p>
        <div class="img-placeholder" onclick="promptImage(this)">
          <span>Click to insert/replace image<br/>(e.g., General Arrangement drawing)</span>
          <img src="" alt="" onerror="this.style.display='none'">
        </div>
      </div>
      <div class="img-box">
        <div class="img-title">2.10 — Ballistic Protection Cell</div>
        <p class="para" style="font-size:10px; margin-bottom:6px;">Reference for VPAM Edition 3 VR7 protective cell integration on commercial chassis.</p>
        <div class="img-placeholder" onclick="promptImage(this)">
          <span>Click to insert/replace image<br/>(e.g., Armoring Cell layout / Base structural limits)</span>
          <img src="" alt="" onerror="this.style.display='none'">
        </div>
      </div>
    </div>
    <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addImageBox(this)">+ Add Image Box</button></div>

    <div class="img-grid">
      <div class="img-box">
        <div class="img-title">2.14 — Visual Signaling (Roof Bar)</div>
        <p class="para" style="font-size:10px; margin-bottom:6px;">Demonstrating LED lightbar (>90% width), Alley Lights, and overall layout.</p>
        <div class="img-placeholder" onclick="promptImage(this)">
          <span>Click to insert/replace image<br/>(e.g., Roof bar design/spec sheet snippet)</span>
          <img src="" alt="" onerror="this.style.display='none'">
        </div>
      </div>
      <div class="img-box">
        <div class="img-title">2.16 — Lighting Assembly (Unmarked)</div>
        <p class="para" style="font-size:10px; margin-bottom:6px;">Demonstrating internal red/blue modules and discrete grille module integration.</p>
        <div class="img-placeholder" onclick="promptImage(this)">
          <span>Click to insert/replace image<br/>(e.g., Unmarked lighting configuration)</span>
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

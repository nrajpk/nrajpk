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
    <p class="para" style="margin-bottom: 20px;">Click any section below to jump directly to the relevant page. This structure has been logically organized while maintaining strict mapping to the indices established in the E-DOCS Process No. 2024-Z5W27 Terms of Reference.</p>
    
    <div class="toc-container" contenteditable="false">
      <a href="#part-a" class="toc-link">PART A - PRE-REQUISITES CHECK</a><br>
      <a href="#part-a" class="toc-sublink">↳ A1. Administrative & Legal Documents</a><br>
      <a href="#part-a" class="toc-sublink">↳ A2. Tax, Social & Labor Qualification</a><br>
      
      <a href="#part-b" class="toc-link" style="margin-top: 10px; display: inline-block;">PART B - TECHNICAL REQUISITES</a><br>
      <a href="#part-b" class="toc-sublink">↳ B1. Common Technical Qualification</a><br>
      <a href="#part-b2" class="toc-sublink">↳ B2. Technical Specifications – Item 1 (APC)</a><br>
      <a href="#apc-evidence" class="toc-sublink">↳ B3. Visual References & Evidence – APC</a><br>
      <a href="#part-b4" class="toc-sublink">↳ B4. Technical Specifications – Item 2 (CAV)</a><br>
      <a href="#cav-evidence" class="toc-sublink">↳ B5. Visual References & Evidence – CAV</a><br>
      <a href="#part-b6" class="toc-sublink">↳ B6. Acceptance Tests (ATP) & Testing Committee</a><br>
      
      <a href="#part-c" class="toc-link" style="margin-top: 10px; display: inline-block;">PART C - ECONOMIC & FINANCIAL COMPLIANCE</a><br>
      <a href="#part-d" class="toc-link">PART D - COMMERCIAL PROPOSAL</a><br>
      <a href="#part-e" class="toc-link">PART E - TRAINING, WARRANTY & MAINTENANCE</a><br>
      
      <div class="toc-divider"></div>
      <a href="#final-declarations" class="toc-link">FINAL DECLARATIONS & SIGNATURES</a><br>
      <div class="toc-divider"></div>
      <a href="#vol8" class="toc-link">APPENDED ANNEXURES & CERTIFICATES</a>
    </div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page" id="part-a">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="vol-identifier">PART A - PRE-REQUISITES CHECK</div>
    
    <div class="main-heading">A1. Administrative & Legal Documents</div>
    <p class="para">Matrix corresponding to the legal qualification requirements.</p>
    <table>
      <thead><tr><th style="width: 8%;">Ref. No</th><th style="width: 36%;">Details (Per Source Document)</th><th style="width: 8%;">Comply</th><th style="width: 24%;">MEVA Response</th><th style="width: 24%;">Supporting Documents</th></tr></thead>
      <tbody>
        <tr><th colspan="5" class="group-header">LEGAL QUALIFICATION & FOREIGN COMPANIES</th></tr>
        <tr><td>1.5 / 5.1</td><td><strong>Foreign business entity:</strong> authorization decree for operation in Brazil... or documents equivalent to those required for national companies, initially in free translation.</td><td class="col-exec col-exec-tbd">TBD</td><td>Valid UAE documents attached with sworn translations.</td><td>Annex 1.5 / 5.1</td></tr>
        <tr><td>5.4</td><td>Foreign companies that are unable to submit the documentation required... due to lack of equivalent instrument... must submit a declaration, as per Annex I-H.</td><td class="col-exec col-exec-tbd">TBD</td><td>Notarized Declaration (Annex I-H) attached.</td><td>Annex 5.4 (I-H)</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false">
      <button class="doc-control" onclick="addRow(this)">+ Add Row</button>
      <button class="doc-control" onclick="removeRow(this)">- Remove Row</button>
      <button class="doc-control" onclick="addDeepdiveRow(this)">+ Add Deep Dive</button>
    </div>

    <div class="main-heading" style="margin-top: 20px;">A2. Tax, Social & Labor Qualification</div>
    <p class="para">Matrix corresponding to the tax and labor qualification requirements.</p>
    <table>
      <thead><tr><th style="width: 8%;">Ref. No</th><th style="width: 36%;">Details (Per Source Document)</th><th style="width: 8%;">Comply</th><th style="width: 24%;">MEVA Response</th><th style="width: 24%;">Supporting Documents</th></tr></thead>
      <tbody>
        <tr><th colspan="5" class="group-header">TAX, SOCIAL AND LABOR QUALIFICATION</th></tr>
        <tr><td>2.1</td><td>Proof of registration in the National Registry of Legal Entities (CNPJ) or equivalent.</td><td class="col-exec col-exec-tbd">TBD</td><td>UAE TRN Certificate provided.</td><td>Annex 2.1</td></tr>
        <tr><td>2.5</td><td>Proof of tax compliance with the National Treasury (RFB and PGFN).</td><td class="col-exec col-exec-tbd">TBD</td><td>UAE FTA clearance confirming no liabilities.</td><td>Annex 2.5</td></tr>
        <tr><td>2.8</td><td>Proof of good standing with the Labor Courts.</td><td class="col-exec col-exec-tbd">TBD</td><td>MOHRE good standing certificate.</td><td>Annex 2.8</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false">
      <button class="doc-control" onclick="addRow(this)">+ Add Row</button>
      <button class="doc-control" onclick="removeRow(this)">- Remove Row</button>
      <button class="doc-control" onclick="addDeepdiveRow(this)">+ Add Deep Dive</button>
    </div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page" id="part-b">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="vol-identifier">PART B - TECHNICAL REQUISITES</div>
    
    <div class="main-heading">B1. Common Technical Qualification</div>
    <table>
      <thead><tr><th style="width: 8%;">Ref. No</th><th style="width: 36%;">Details (Per Source Document)</th><th style="width: 8%;">Comply</th><th style="width: 24%;">MEVA Response</th><th style="width: 24%;">Supporting Documents</th></tr></thead>
      <tbody>
        <tr><td>3.1.2 (a)</td><td>Proof of technical-operational capacity: Must prove supply of at least 2 units (Item 1) and 10 units (Item 2). Issued by police/military authority.</td><td class="col-exec col-exec-tbd">TBD</td><td>Certificates exceed minimum qty requirements.</td><td>Annex 3.1.2 (a)</td></tr>
        <tr><td>3.1.2 (b)</td><td>Proof of project maturity: History of use Military and Law Enforcement (MLE), national or foreign, for at least 02 (two) years.</td><td class="col-exec col-exec-tbd">TBD</td><td>Historical MLE supply proven.</td><td>Annex 3.1.2 (b)</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false">
      <button class="doc-control" onclick="addRow(this)">+ Add Row</button>
      <button class="doc-control" onclick="removeRow(this)">- Remove Row</button>
      <button class="doc-control" onclick="addDeepdiveRow(this)">+ Add Deep Dive</button>
    </div>

    <div id="part-b2" class="main-heading" style="margin-top: 20px;">B2. Technical Specifications – Item 1 (APC)</div>
    <p class="para">Matrix corresponding to Annex I-B of the source document.</p>
    
    <table>
      <thead>
        <tr>
          <th style="width:8%">Ref. No</th>
          <th style="width:36%">Details (Per Source Document)</th>
          <th style="width:8%">Comply</th>
          <th style="width:24%">MEVA Response</th>
          <th style="width:24%">Supporting Documents</th>
        </tr>
      </thead>
      <tbody>
        <tr><th colspan="5" class="group-header">1. OF THE OBJECT</th></tr>
        <tr><td>1.1.1</td><td>Acquisition of a light armored operational vehicle for the transport of 10 (ten) operational military personnel (driver; commander + 8 operational personnel).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>1.1.2</td><td>The vehicles must have been manufactured in 2024 or later, have never been used, and be in 0 (zero) kilometer condition, guaranteed by the manufacturer.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>1.1.3</td><td>Adaptations for visual and auditory signaling, communication, and transceivers may be installed in Brazilian territory at the location specified in the contract.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2. TECHNICAL SPECIFICATIONS OF THE VEHICLES</th></tr>
        <tr><td>2.1.1</td><td>Chassis: Mounted on a commercial chassis and reinforced with the capacity to support an armored structure.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.2.1</td><td>Engine type: Internal combustion engine, turbo diesel, Euro 4 or higher.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.2.2</td><td>Power: 300 HP.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.2.3</td><td>Torque: Minimum torque (Newton rotations - revolutions per minute) - 1,000 Nm / 1,200 to 2,200 rpm.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        
        <tr><th colspan="5" class="group-header">2.3 TRANSMISSION, STEERING, BRAKES and SUSPENSION</th></tr>
        <tr><td>2.3.1</td><td>Gearbox: Automatic transmission with at least six forward speeds and one reverse speed, torque converter and electronic management.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.2</td><td>Wheel drive: 4X4 part-time; real-time electronic transfer case; automatic/manual freewheel.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.3 (a-b)</td><td>Brakes: The braking system must have (ABS) on all wheels; Electronic brake force distribution (EBD); Ventilated disc brakes.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        
        <tr class="no-break">
          <td colspan="5" style="background-color: #f8fafc; border-left: 3px solid var(--brand-color); padding: 15px;">
            <strong style="color: var(--brand-color); font-size: 11px; text-transform: uppercase;">↳ Technical Deep Dive & Evidence: Braking System</strong>
            <div contenteditable="true" style="margin-top: 8px; font-size: 11px; color: var(--text-main); margin-bottom: 12px;">
               <strong>Brand / OEM:</strong> Brembo / DBA (Example)<br><br>
               <strong>Technical Justification:</strong> The upgraded heavy-duty braking kit features slotted ventilated rotors and 6-piston calipers designed specifically to handle the increased GVWR of the armored platform without brake fade during pursuit or evasive maneuvers.
            </div>
            <div class="img-placeholder" onclick="promptImage(this)" style="max-width: 400px; margin: 0 auto; background: #fff;">
              <span>Click to insert technical diagram / photo of brake kit</span>
              <img src="" alt="" style="display:none; width: 100%; border-radius: 4px;">
            </div>
          </td>
        </tr>

        <tr><td>2.3.3 (c)</td><td>Brakes: The service brake system must keep the vehicle immobilized, even at its total weight, when parked on the asphalt surface up to 60%.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.3 (d)</td><td>Brakes: Electronic stability control (ESP - Electronic Stability Program) that can be activated or deactivated inside the cabin.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.4 (a-b)</td><td>Direction: Hydraulic or electrical; Original factory steering wheel positioned on the left side of the cabin.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.5</td><td>Suspension: The axles must be reinforced to meet military requirements.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false">
      <button class="doc-control" onclick="addRow(this)">+ Add Row</button>
      <button class="doc-control" onclick="removeRow(this)">- Remove Row</button>
      <button class="doc-control" onclick="addDeepdiveRow(this)">+ Add Deep Dive</button>
    </div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="main-heading" style="font-size: 13px;">B2. Technical Specifications – Item 1 (Cont.)</div>

    <table>
      <thead>
        <tr><th style="width:8%">Ref. No</th><th style="width:36%">Details (Per Source Document)</th><th style="width:8%">Comply</th><th style="width:24%">MEVA Response</th><th style="width:24%">Supporting Documents</th></tr>
      </thead>
      <tbody>
        <tr><th colspan="5" class="group-header">2.4 ELECTRICAL SYSTEMS, LIGHTING AND AIR CONDITIONING</th></tr>
        <tr><td>2.4.1 (a)</td><td>Electrical system: Compatible capacity to simultaneously power the vehicle's original consumers, adaptations, and data/voice communication equipment.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.1 (b)</td><td>Electrical system: Harnesses, frames, and wiring must be packaged and insulated to prevent rust and movement that could result in friction/damage.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.1 (c)</td><td>Electrical system: Wiring must be protected against water, weather, and dirt by a conduit/similar type shield.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.1 (d)</td><td>Electrical system: Wiring coding that meets ABNT 5410 or similar international standard; cables not installed in locations subject to cuts or edges.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.1 (e)</td><td>Electrical system: System voltage - 12 volts.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.1 (f)</td><td>Electrical system: The vehicle must have at least 02 (two) 12-volt batteries.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.2 (a-b)</td><td>Lighting: LED headlights. LED lamps – interior and exterior lighting (except headlights/turn signals).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.3 (a-c)</td><td>Air Conditioning: Cooling and ventilation directed throughout the cabin. Capacity to cool the cabin in an environment where the outside temperature exceeds 50°C. Must provide hot and cold air.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.5 PERFORMANCE, 2.6 DIMENSIONS & 2.7 WEIGHT</th></tr>
        <tr><td>2.5.1-3</td><td>Min fuel tank capacity: 200L (S10 Diesel). Min range: 500 km.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.5.4 (a-b)</td><td>Wheels and tires: 18” rim and larger. System Run Flat on all tires, including spare.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.5.5 (a-b)</td><td>Performance: Cruising speed 90 km/h. Maximum speed 100 km/h.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.6.1-5</td><td>Max L: 7000mm. Max W: 3000mm. Height: 3000mm. Max Wheelbase: 3600mm. Min ground clearance: 250mm.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.7.1-3</td><td>GVWR: up to 12000 kg. Curb weight: up to 10,000 kg. Min payload: 1500 kg.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.8 DRIVING CHAR. & 2.9 CONFIGURATION</th></tr>
        <tr><td>2.8.1 (a-d)</td><td>Gradual ascent/descent capacity: 50%. Static lateral tilt: 30º. Min approach angle: 30º. Min departure angle: 30º.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.1 (a-c)</td><td>Seats for 10 (1+1+8). Cloth driver/passenger seats, manually adjustable. All seats have seat belts.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.2 (a-d)</td><td>4 side doors. 1 rear door (outward). 1 escape hatch in roof. Exterior running boards around side/rear doors.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.3 (a-d)</td><td>11 replaceable windows: Split windshield, single in each side door, single in rear door. All windows covered with factory-installed blinds.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.4 (a-d)</td><td>11 firing ports: below side windows, below rear window, below lower side windows, top of door below window.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.5</td><td>Locks: Standard with manual key.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.10 BALLISTIC PROTECTION</th></tr>
        <tr><td>2.10 (a-e)</td><td>Police protection cell: CEN BR 7 (glazed areas/opaque/loopholes). Floor: Protection against simultaneous explosions (DM51x2, HG85, DM31). Engine/mudguards: Critical components protected. Radiator guard 7.62x51mm NATO 60°N.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false">
      <button class="doc-control" onclick="addRow(this)">+ Add Row</button>
      <button class="doc-control" onclick="removeRow(this)">- Remove Row</button>
      <button class="doc-control" onclick="addDeepdiveRow(this)">+ Add Deep Dive</button>
    </div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="main-heading" style="font-size: 13px;">B2. Technical Specifications – Item 1 (Cont.)</div>

    <table>
      <thead>
        <tr><th style="width:8%">Ref. No</th><th style="width:36%">Details (Per Source Document)</th><th style="width:8%">Comply</th><th style="width:24%">MEVA Response</th><th style="width:24%">Supporting Documents</th></tr>
      </thead>
      <tbody>
        <tr><th colspan="5" class="group-header">2.11 GRAPHIC DESIGN</th></tr>
        <tr><td>2.11 (I-II)</td><td>CIELAB Standard Color Space (D65/10º, A/10º, T84/10º). Special paint identification stickers according to PMES standards.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.12 MANUALS & ACCESSORIES</th></tr>
        <tr><td>2.12.1 (a-e)</td><td>4 external cameras. AM/FM radio w/ 2 speakers & antenna prep. Lifting tools. 4,000kg electromechanical front winch. Electric exterior rearview mirrors.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.12.2-3</td><td>Operating/maintenance manuals in Portuguese. Training in Portuguese in Espírito Santo.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.13 ACOUSTIC SIGNALING</th></tr>
        <tr><td>2.13.1 (a-g)</td><td>Electronic siren: min 100W @ 11 Ohms. Min 110 dB at 1m. 3 tones (Wail, Yelp, Horn). Discreet installation. Sealed driver (police use only). Specific mounting points. No RF interference. ANATEL compliant.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.14 VISUAL SIGNALING</th></tr>
        <tr><td>2.14.1 (I-VI)</td><td>Weather/corrosion resistant. Automatic load management. PWM current management. SAE J595 Colors. Secondary Front/Rear lighting (4x 3W modules, Red/Blue).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.14.1 (VIII)</td><td>WHITE LIGHTS WITH STROBE EFFECTS: Inside headlights/taillights, face-to-face sync, min 350 ANSI lumens.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.15 & 2.16 COMMUNICATION EQUIPMENT</th></tr>
        <tr><td>2.15 (a-e)</td><td>TETRA Prep: 5A fused cable. Multifunction roof antenna (GPS, GSM, 3G, WLAN, TETRA) IP66. Independent cables (SMA, FME). 12x12 cm access cover.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.16 (i-iii)</td><td>Analog Prep: Motorola PRO5100 adaptation with remote kit. External VHF antenna (46-49 MHz, 50 Ohms, VSWR max 1.5:1). RG58C cable. Impedance/SWR report required.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false">
      <button class="doc-control" onclick="addRow(this)">+ Add Row</button>
      <button class="doc-control" onclick="removeRow(this)">- Remove Row</button>
      <button class="doc-control" onclick="addDeepdiveRow(this)">+ Add Deep Dive</button>
    </div>

    <div class="sub-heading" style="margin-top: 20px;">Item 1 – Formal Certifications Required (Refer to Annexures)</div>
    <table>
      <thead><tr><th style="width: 8%;">Ref. No</th><th style="width: 36%;">Details</th><th style="width: 8%;">Comply</th><th style="width: 24%;">MEVA Response</th><th style="width: 24%;">Supporting Documents</th></tr></thead>
      <tbody>
        <tr><td>3.5</td><td><strong>Ballistic Certification – APC</strong><br><em style="font-size:9px; color:gray;">Independent lab. Opaque/Transparent level CEN BR 7.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Independent BR7 Cert attached.</td><td>Annex 3.5</td></tr>
        <tr><td>3.6</td><td><strong>Underbody Protection Certification – APC</strong><br><em style="font-size:9px; color:gray;">Blast test compliance certification.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Blast Certs attached.</td><td>Annex 3.6</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false">
      <button class="doc-control" onclick="addRow(this)">+ Add Row</button>
      <button class="doc-control" onclick="removeRow(this)">- Remove Row</button>
      <button class="doc-control" onclick="addDeepdiveRow(this)">+ Add Deep Dive</button>
    </div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page" id="apc-evidence">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="vol-identifier">PART B - TECHNICAL REQUISITES</div>
    <div class="main-heading">B3. Visual References & Evidence – Item 1 (APC)</div>
    <p class="para">The following technical diagrams and visual evidence corroborate the specifications detailed in Annex IB.</p>

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
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page" id="part-b4">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="vol-identifier">PART B - TECHNICAL REQUISITES</div>
    <div class="main-heading" style="margin-top: 10px; font-size: 13px;">B4. Technical Specifications – Item 2 (CAV)</div>
    <p class="para">Matrix corresponding to Annex I-D of the source document.</p>
    
    <table>
      <thead>
        <tr><th style="width:8%">Ref. No</th><th style="width:36%">Details (Per Source Document)</th><th style="width:8%">Comply</th><th style="width:24%">MEVA Response</th><th style="width:24%">Supporting Documents</th></tr>
      </thead>
      <tbody>
        <tr><th colspan="5" class="group-header">1. OBJECT</th></tr>
        <tr><td>1.1.1</td><td>Acquisition of armored tactical SUV for transport of 05 military personnel (1 driver + 1 cmdr + 3).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>1.1.2</td><td>Manufactured in 2024 or later, never used, 0 (zero) kilometer condition, guaranteed by manufacturer.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2. TECHNICAL SPECIFICATIONS OF THE VEHICLES</th></tr>
        <tr><td>2.1.1</td><td>Chassis: Mounted on a commercial chassis and reinforced to support armored structure.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.2.1-3</td><td>Engine type: Turbo diesel, Euro 4+. Power: 300 HP. Torque: Min 700 Nm / 1,500 to 2,700 rpm.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        
        <tr><th colspan="5" class="group-header">2.3 TRANSMISSION, STEERING, BRAKES & SUSPENSION</th></tr>
        <tr><td>2.3.1</td><td>Gearbox: Auto trans with at least 6 forward speeds and 1 reverse, torque converter.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.2 (a-b)</td><td>Wheel drive: Full-time 4WD; 4X4 part-time electronic transfer box; Real-time.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.3 (a-d)</td><td>Brakes: ABS on all wheels; EBD; Ventilated discs. Service brake immobilizes up to 60% gradient. ESP activatable from cabin.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.4 (a-b)</td><td>Direction: Hydraulic/electrical; Original factory LHD.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.3.5</td><td>Suspension: Axles reinforced to meet military requirements.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.4 ELECTRICAL, LIGHTING & AC</th></tr>
        <tr><td>2.4.1 (a-f)</td><td>Electrical: Compatible capacity. Packaged/insulated wiring, protected against water. 12V system. At least two 12V batteries.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.2 (a-c)</td><td>Lighting: LED headlights, LED interior/exterior lamps, LED/halogen ceiling light.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.4.3 (a-c)</td><td>Air Cond: Cooling front/rear. Cools in >50°C environments. Hot and cold air.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.5 PERFORMANCE, 2.6 DIMENSIONS & 2.7 WEIGHT</th></tr>
        <tr><td>2.5.1-3</td><td>Fuel tank: 110 liters. S10 Diesel. Min range: 700 km fully charged.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.5.4 (a-b)</td><td>Wheels/tires: 18” rim+. System Run Flat on all tires, including spare.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.5.5 (a-b)</td><td>Performance: Cruising speed 90 km/h. Maximum speed 120 km/h.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.6.1-5</td><td>Max L: 5500mm. Max W: 2000mm. Max H: 2000mm. Max WB: 3000mm. Min clearance: 220mm.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.7.1-3</td><td>GVWR: up to 6000 kg. Curb weight: up to 5000 kg. Min payload: 1000 kg.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.8 DRIVING CHAR. & 2.9 CONFIGURATION</th></tr>
        <tr><td>2.8.1 (a-e)</td><td>Ascent/descent: 50%. Lateral tilt: 30º. Min approach angle: 30º. Min departure angle: 20º.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.1 (a-d)</td><td>Seats for 5 (1+1+3). Cloth seats. 3 second-row seats face forward. All have seat belts.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.2 (a-c)</td><td>5-door vehicle: 4 side doors (forward hinge), 1 rear door. Exterior door sills.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.3 (a-d)</td><td>7 replaceable windows: One-piece windshield, single window in side/rear doors. 1 escape hatch.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.9.4 (a-c)</td><td>Locks: Standard manual key; Presence sensor; Door lock/alarm control.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.10 BALLISTIC PROTECTION</th></tr>
        <tr><td>2.10</td><td>Protective cell (glazed areas, floor, engine): VPAM EDITION 3 VR7 (5.56x45mm NATO & 7.62x51mm NATO). Front radiator guard 7.62x51mm 60°N. Front mudguards, critical engine comps (batteries, ECU, ABS).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false">
      <button class="doc-control" onclick="addRow(this)">+ Add Row</button>
      <button class="doc-control" onclick="removeRow(this)">- Remove Row</button>
      <button class="doc-control" onclick="addDeepdiveRow(this)">+ Add Deep Dive</button>
    </div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="main-heading" style="font-size: 13px;">B4. Technical Specifications – Item 2 (Cont.)</div>

    <table>
      <thead>
        <tr><th style="width:8%">Ref. No</th><th style="width:36%">Details (Per Source Document)</th><th style="width:8%">Comply</th><th style="width:24%">MEVA Response</th><th style="width:24%">Supporting Documents</th></tr>
      </thead>
      <tbody>
        <tr><th colspan="5" class="group-header">2.11 GRAPHIC DESIGN</th></tr>
        <tr><td>2.11 (I-II)</td><td>CIELAB Standard (D65/10º, A/10º, T84/10º). Special paint stickers per PMES. Unmarked: metallic/solid/pearlescent.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.12 MANUALS, ACC. & 2.13 ACOUSTICS</th></tr>
        <tr><td>2.12.1 (a-d)</td><td>Color reversing camera/monitor. AM/FM radio w/ antenna prep. Lifting tools. Electric exterior mirrors.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.12.2</td><td>Operating and preventive maintenance manuals in Portuguese.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.13.1 (a-g)</td><td>Electronic siren: min 100W @ 11 Ohms. Min 110 dB at 1m. 3 tones. Discreet installation. Sealed driver. No RF interference. ANATEL compliant.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>

        <tr><th colspan="5" class="group-header">2.14, 2.15 & 2.16 VISUAL, COMMS & LIGHTING ASSY</th></tr>
        <tr><td>2.14.1 (I-IV)</td><td>Visual Signaling: Weather resistant, PWM load mgmt. Roof Lightbar (>90% width) with animations (ROUND, QTI, STOP, EMERGENCY).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.14.1 (IX)</td><td>AlLEY LIGHTING: Near the main lighting bar, white side lighting (min 1500 ANSI lumens, 20,000 cd).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.14.1 (X)</td><td>SECONDARY LIGHTING: Front/Rear 4x 3W LED modules, 6 alternating Red/Blue.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.14.1 (XI)</td><td>WHITE LIGHTS WITH STROBE EFFECTS: Inside headlights/taillights, face-to-face sync, min 350 ANSI lumens.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.14.1 (XII)</td><td>TRAFFIC GUIDANCE BAR: Amber, min 5 segments (left->right, right->left, center->edges).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.14.1 (XIII)</td><td>CONTROL PANEL: 1 DIN (179x50mm). Controls visual/acoustic signaling.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.15 (a-o)</td><td>Comms Prep (TETRA): 5A fused cable. Multifunction roof antenna (GPS/GSM/3G/WLAN/TETRA) IP66. 12x12 cm access cover.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.16 (i-v)</td><td>Comms Prep (Analog): PRO5100 prep. VHF Antenna (46-49 MHz), SWR ≤ 1.5:1. Impedance/SWR report required.</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
        <tr><td>2.16 (a-e)</td><td>Unmarked Lighting Assy: Front primary (inside windshield), Rear primary (inside rear window), Secondary (behind grille, smoked lens). 2 magnetic emblems (40 cm).</td><td class="col-exec col-exec-tbd">TBD</td><td></td><td></td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false">
      <button class="doc-control" onclick="addRow(this)">+ Add Row</button>
      <button class="doc-control" onclick="removeRow(this)">- Remove Row</button>
      <button class="doc-control" onclick="addDeepdiveRow(this)">+ Add Deep Dive</button>
    </div>

    <div class="sub-heading" style="margin-top: 20px;">Item 2 – Formal Certifications Required (Refer to Annexures)</div>
    <table>
      <thead><tr><th style="width: 8%;">Ref. No</th><th style="width: 36%;">Details</th><th style="width: 8%;">Comply</th><th style="width: 24%;">MEVA Response</th><th style="width: 24%;">Supporting Documents</th></tr></thead>
      <tbody>
        <tr><td>3.8</td><td><strong>Ballistic Certification – CAV</strong><br><em style="font-size:9px; color:gray;">Independent lab. Opaque + transparent shielding per VPAM VR7.</em></td><td class="col-exec col-exec-tbd">TBD</td><td>Independent VPAM VR7 Cert.</td><td>Annex 3.8</td></tr>
      </tbody>
    </table>
    <div class="doc-controls-wrapper" contenteditable="false">
      <button class="doc-control" onclick="addRow(this)">+ Add Row</button>
      <button class="doc-control" onclick="removeRow(this)">- Remove Row</button>
      <button class="doc-control" onclick="addDeepdiveRow(this)">+ Add Deep Dive</button>
    </div>
  </div>
  <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
</div>

<div class="page" id="cav-evidence">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="vol-identifier">PART B - TECHNICAL REQUISITES</div>
    <div class="main-heading">B5. Visual References & Evidence – Item 2 (CAV)</div>
    <p class="para">The following technical diagrams and visual evidence corroborate the specifications detailed in Annex ID.</p>

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

<div class="page" id="part-b6">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="vol-identifier">PART B - TECHNICAL REQUISITES</div>
    <div class="main-heading">B6. Acceptance Tests (ATP) & Testing Committee</div>
    <div class="info-box note" style="margin-bottom: 16px;">
      <strong>Commitment:</strong> Confirms vehicle will undergo tests per Annex I-C (Item 1) and Annex I-E (Item 2). Mahindra Emirates Vehicle Armouring FZ-LLC confirms full acceptance of the ATP exactly as defined. The contractor commits to present sample vehicles, provide logistics/travel for the 4-member PMES committee to the UAE, and designate specialized personnel.
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

<div class="page" id="part-c">
  <div class="header">
    <div class="logo-container"><img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span></div>
  </div>
  <div class="page-content">
    <div class="vol-identifier">PART C - ECONOMIC & FINANCIAL COMPLIANCE</div>
    <div class="main-heading">Part Summary Checklist</div>
    <table>
      <thead><tr><th style="width: 8%;">Ref. No</th><th style="width: 36%;">Details (

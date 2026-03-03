// seed-data.js
export const defaultHTML = `
  
    <div class="page" style="padding: 0; display: flex; flex-direction: column; overflow: hidden; border-radius: 8px;">
  <!-- HERO BAND (WIDE, PRINT-STABLE) -->
  <div style="width: 100%; height: 55mm; position: relative; background-color: var(--bg-gray); overflow: hidden;">
    <img
      src="mevahero.jpeg"
      alt="MEVA Armored Vehicles"
      style="width: 100%; height: 100%; object-fit: cover; display: block;"
      onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
    >

    <!-- Fallback placeholder (shows only if image fails) -->
    <div style="display:none; width:100%; height:100%; align-items:center; justify-content:center; flex-direction:column; color:#9ca3af; font-size:14px; font-weight:bold; background:#e5e7eb; position:absolute; top:0; left:0;">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" style="margin-bottom:10px;">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      [ HERO IMAGE PLACEHOLDER (WIDE) ]
    </div>

    <!-- Brand strip -->
    <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 8px; background-color: var(--brand-color);"></div>
  </div>

  <!-- COVER CONTENT -->
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
        <td style="padding: 5px 0; font-weight: 700; color: var(--text-muted); width: 140px; border: none; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">
          Auction No:
        </td>
        <td style="padding: 5px 0; font-weight: 700; color: var(--text-main); border: none; font-size: 15px;">
          002/2026 – PMES
        </td>
      </tr>
      <tr>
        <td style="padding: 5px 0; font-weight: 700; color: var(--text-muted); border: none; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">
          Destination:
        </td>
        <td style="padding: 5px 0; font-weight: 600; color: var(--text-main); border: none; font-size: 15px;">
          State of Espírito Santo, Brazil
        </td>
      </tr>
      <tr>
        <td style="padding: 5px 0; font-weight: 700; color: var(--text-muted); border: none; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">
          Bidder:
        </td>
        <td style="padding: 5px 0; font-weight: 800; color: var(--brand-color); border: none; font-size: 16px;">
          Mahindra Emirates Vehicle Armouring FZ-LLC
        </td>
      </tr>
    </table>
  </div>
</div>
    <!-- PAGE 1: INDEX -->
    <div class="page" id="index-page">
      <div class="header">
        <div class="logo-container">
          <img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span>
        </div>
      </div>
      <div class="page-content">
        <div class="vol-identifier">MASTER DOCUMENT INDEX</div>
        <p class="para" style="margin-bottom: 20px;">Click any section below to jump directly to the relevant page.</p>
        <div class="toc-container" contenteditable="false">
          <a href="#vol1" class="toc-link">VOLUME I — ADMINISTRATIVE & LEGAL DOCUMENTS</a>
          <a href="#vol2" class="toc-link">VOLUME II — TAX, SOCIAL & LABOR QUALIFICATION</a>
          <a href="#vol3" class="toc-link">VOLUME III — TECHNICAL QUALIFICATION</a>
          <a href="#item3-4" class="toc-sublink">3.4 ITEM 1 – APC: Technical Compliance Matrix</a>
          <a href="#apc-evidence" class="toc-sublink">↳ ITEM 1 – APC: Supporting Evidence & Images</a>
          <a href="#item3-7" class="toc-sublink">3.7 ITEM 2 – CAV: Technical Compliance Matrix</a>
          <a href="#cav-evidence" class="toc-sublink">↳ ITEM 2 – CAV: Supporting Evidence & Images</a>
          <a href="#vol4" class="toc-link">VOLUME IV — ECONOMIC & FINANCIAL QUALIFICATION</a>
          <a href="#vol5" class="toc-link">VOLUME V — COMMERCIAL PROPOSAL</a>
          <a href="#item5-2" class="toc-sublink">5.2 Commercial Pricing Schedule</a>
          <a href="#vol6" class="toc-link">VOLUME VI — SAMPLE & TESTING COMMITMENT</a>
          <a href="#item6-5" class="toc-sublink">6.5 Acceptance Test Compliance Statement & Tables (APC)</a>
          <a href="#item6-6" class="toc-sublink">6.6 Acceptance Test Compliance Statement & Tables (CAV)</a>
          <a href="#vol7" class="toc-link">VOLUME VII — POST-CONTRACT COMMITMENTS</a>
          <div class="toc-divider"></div>
          <a href="#final-declarations" class="toc-link">FINAL DECLARATIONS & SIGNATURES</a>
          <a href="#annex2" class="toc-sublink">Compliance with Annex II (Testing Committee)</a>
          <a href="#signatures" class="toc-sublink">Binding Undertaking, Traceability Checklist & Signatures</a>
          <div class="toc-divider"></div>
          <a href="#vol8" class="toc-link">VOLUME VIII — ANNEXURES & CERTIFICATES</a>
          <a href="#vol8" class="toc-sublink">Appended Certificate Placeholders</a>
        </div>
      </div>
      <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
    </div>

    <!-- PAGE 2: VOL I & II CHECKLIST -->
    <div class="page" id="vol1">
      <div class="header">
        <div class="logo-container">
          <img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span>
        </div>
      </div>
      <div class="page-content">
        <div class="vol-identifier">VOLUME I — ADMINISTRATIVE & LEGAL DOCUMENTS</div>
        <div class="main-heading">Volume Summary Checklist (Common)</div>
        <table>
          <thead><tr><th style="width: 8%;">#</th><th style="width: 32%;">Document Name</th><th style="width: 60%;">Components & Verification Details</th></tr></thead>
          <tbody>
            <tr><td>1.1</td><td><strong>Bid Cover Letter</strong></td><td><ul class="check-list"><li>Identifies bidder & Brazilian legal representative</li><li>States participation in Item 1 and/or 2</li><li>Signed by authorized signatory</li></ul></td></tr>
            <tr><td>1.2</td><td><strong>Corporate Legal Existence Documents</strong></td><td><ul class="check-list"><li>UAE Trade License (valid) & Cert. of Incorporation</li><li>Memorandum & Articles of Association</li><li>Commercial Registration & Apostille</li></ul></td></tr>
            <tr><td>1.3</td><td><strong>Power of Attorney</strong></td><td><ul class="check-list"><li>Grants authority to receive summons</li><li>Authority to respond & sign ARP/Contract</li><li>Apostilled</li></ul><div class="info-box critical"><strong>Critical:</strong> Mandatory for foreign company participation.</div></td></tr>
            <tr><td>1.4</td><td><strong>Declarations (Law 14.133/2021)</strong></td><td><ul class="check-list" style="column-count:2; column-gap:10px;"><li>Acceptance of Conditions</li><li>Covers labor rights costs</li><li>No employment of minors</li><li>No forced/degrading labor</li><li>Disability quota</li><li>No conviction (child labor)</li><li>No conflict of interest</li><li>No sanctions preventing bid</li></ul></td></tr>
            <tr><td>1.5</td><td><strong>Declaration of Non-Existence</strong></td><td>Only for Brazilian documents that have no UAE equivalent.</td></tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>

        <div id="vol2" class="vol-identifier" style="margin-top: 20px;">VOLUME II — TAX, SOCIAL & LABOR QUALIFICATION</div>
        <div class="main-heading">Volume Summary Checklist (Common)</div>
        <table>
          <thead><tr><th style="width: 8%;">#</th><th style="width: 40%;">Certificate Name</th><th style="width: 52%;">Equivalency / Condition</th></tr></thead>
          <tbody>
            <tr><td>2.1</td><td><strong>UAE Tax Registration Certificate (FTA – TRN)</strong></td><td>Equivalent to CNPJ.</td></tr>
            <tr><td>2.2</td><td><strong>UAE Tax Compliance Certificate</strong></td><td>FTA clearance confirming no outstanding liabilities.</td></tr>
            <tr><td>2.3</td><td><strong>Labor Compliance Certificate</strong></td><td>MOHRE good standing certificate.</td></tr>
            <tr><td>2.4</td><td><strong>Bankruptcy / Insolvency Certificate</strong></td><td>Issued by competent UAE court. Apostilled.<div class="info-box critical" style="margin-top: 6px;"><strong>Note:</strong> Mandatory disqualification risk if missing.</div></td></tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>
        
        <div class="info-box note"><strong>Note:</strong> All documents listed above are attached as formal annexures in VOLUME VIII.</div>
      </div>
      <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
    </div>

    <!-- PAGE 3: VOL III -->
    <div class="page" id="vol3">
      <div class="header">
        <div class="logo-container">
          <img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span>
        </div>
      </div>
      <div class="page-content">
        <div class="vol-identifier">VOLUME III — TECHNICAL QUALIFICATION</div>
        
        <div class="sub-heading" style="margin-top: 0;">A. COMMON TECHNICAL QUALIFICATION</div>
        <table>
          <tbody>
            <tr>
              <td style="width: 8%; font-weight: 700;">3.1</td>
              <td style="width: 40%;"><strong>Technical-Operational Capacity Certificate(s)</strong></td>
              <td style="width: 52%;">Must prove supply of at least <strong>2 units (APC)</strong> and <strong>10 units (CAV)</strong>. Issued by police/military authority. Must contain contact details. <div class="info-box critical" style="margin-top: 6px;"><strong>Critical:</strong> PRIMARY ELIMINATOR.</div></td>
            </tr>
            <tr>
              <td style="font-weight: 700;">3.2</td>
              <td><strong>Proof of Project Maturity</strong></td>
              <td>Minimum 2 Years MLE Use. End-user certificate, Invoice + delivery confirmation, or Police authority letter.</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">3.3</td>
              <td><strong>Manufacturer Letter of Solidarity</strong></td>
              <td>(Only required if bidder is not the manufacturer)</td>
            </tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>

        <div class="sub-heading" style="margin-top: 14px;">B. ITEM 1 – APC (MEDIUM ARMOURED VEHICLE)</div>
        
        <div id="item3-4" class="main-heading" style="margin-top: 10px; font-size: 13px;">3.4 Technical Compliance Report – Annex IB</div>
        <p class="para">Must confirm compliance with ALL specifications listed below. <br/><em><strong>Note:</strong> Formal certificates are attached in Volume VIII. Visual evidence is attached on the following pages.</em></p>

        <table>
          <thead>
            <tr>
              <th style="width:7%">Ref</th>
              <th style="width:33%">Annex IB Requirement</th>
              <th style="width:25%">MEVA Response</th>
              <th style="width:7%">Comp.</th>
              <th style="width:28%">Evidence File / Note</th>
            </tr>
          </thead>
          <tbody>
            <tr><th colspan="5" class="group-header">1.1 OVERVIEW</th></tr>
            <tr><td>1.I</td><td>Light armored vehicle for transport of 10 personnel (driver; cmdr + 8)</td><td>Offered vehicle will transport 10 (1+1+8)</td><td class="col-exec col-exec-tbd">TBD</td><td>Tech Offer Cover / Image Sec.</td></tr>
            <tr><td>1.II</td><td>Manufactured in 2024+; never used; 0 km condition; mfg guarantee</td><td>Confirm production year and 0 km</td><td class="col-exec col-exec-tbd">TBD</td><td>Manufacturer Declaration</td></tr>
            <tr><td>1.III</td><td>Signaling/communication may be installed in Brazil</td><td>Confirm allowance for install in BR</td><td class="col-exec col-exec-tbd">TBD</td><td>Installation Statement</td></tr>
            
            <tr><th colspan="5" class="group-header">1.2.1 Chassis & 1.2.2 Engine</th></tr>
            <tr><td>1.2.1.I</td><td>Mounted on commercial chassis, reinforced for armoring</td><td>Offered on reinforced commercial chassis</td><td class="col-exec col-exec-tbd">TBD</td><td>OEM Chassis Datasheet</td></tr>
            <tr><td>1.2.2.I</td><td>Internal combustion, turbo diesel, Euro 4 or higher</td><td>Confirm turbo diesel Euro 4+</td><td class="col-exec col-exec-tbd">TBD</td><td>OEM Engine Datasheet</td></tr>
            <tr><td>1.2.2.II</td><td>Power: 300 HP</td><td>Confirm 300 HP</td><td class="col-exec col-exec-tbd">TBD</td><td>OEM Engine Datasheet</td></tr>
            <tr><td>1.2.2.III</td><td>Torque min 1,000 Nm at 1,200–2,200 rpm</td><td>Confirm torque curve meets requirement</td><td class="col-exec col-exec-tbd">TBD</td><td>OEM Torque Curve</td></tr>

            <tr><th colspan="5" class="group-header">1.2.3 Transmission, Steering, Brakes, Suspension</th></tr>
            <tr><td>1.2.3.I</td><td>Automatic, ≥6 fwd + 1 rev, torque converter</td><td>Confirm gearbox spec</td><td class="col-exec col-exec-tbd">TBD</td><td>OEM Transmission Datasheet</td></tr>
            <tr><td>1.2.3.II</td><td>4x4 part-time; electronic transfer case</td><td>Confirm drivetrain spec</td><td class="col-exec col-exec-tbd">TBD</td><td>OEM 4x4 Spec Sheet</td></tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>
      </div>
      <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
    </div>

    <!-- PAGE 4: VOL III (Item 1 Part 2) -->
    <div class="page">
      <div class="header">
        <div class="logo-container">
          <img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span>
        </div>
      </div>
      <div class="page-content">
        <div class="main-heading" style="font-size: 13px;">3.4 Technical Compliance Report – Annex IB (Cont.)</div>
        
        <table>
          <thead>
            <tr>
              <th style="width:7%">Ref</th>
              <th style="width:33%">Annex IB Requirement</th>
              <th style="width:25%">MEVA Response</th>
              <th style="width:7%">Comp.</th>
              <th style="width:28%">Evidence File / Note</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1.2.3.3</td><td>ABS on all wheels and EBD; ventilated disc brakes; service brake holds 60% of vehicle weight</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.3.4</td><td>ESP must be activatable and deactivatable from inside the cabin</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.3.5</td><td>Hydraulic or electric steering; factory left-hand drive; reinforced axles</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.4 ELECTRICAL SYSTEMS, LIGHTING, AIR CONDITIONING</th></tr>
            <tr><td>1.2.4.1</td><td>Electrical capacity for adaptations; insulated harness; compliance with ABNT NBR 5410</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.4.2</td><td>Electrical system voltage 12V; at least two 12V batteries</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.4.3</td><td>LED headlights and LED interior/exterior lighting; air-conditioning for front and rear compartments</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.5 PERFORMANCE</th></tr>
            <tr><td>1.2.5.1</td><td>Vehicle fuel must be S10</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.5.2</td><td>Fuel tank capacity: minimum 200 liters</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.5.3</td><td>Minimum mixed-route range: 500 km</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.5.4</td><td>Rim size 18 inches or more</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.5.5</td><td>Run-flat system on all tires</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.5.6</td><td>Cruise speed 90 km/h; maximum speed 100 km/h</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.6 DIMENSIONS</th></tr>
            <tr><td>1.2.6</td><td>Length ≤ 7000 mm; Width ≤ 3000 mm; Height ≤ 3000 mm; Wheelbase ≤ 3600 mm; Ground clearance ≥ 250 mm</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.7 WEIGHT</th></tr>
            <tr><td>1.2.7.1</td><td>GVWR ≤ 12,000 kg</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.7.2</td><td>Curb weight ≤ 10,000 kg</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.7.3</td><td>Payload ≥ 1,500 kg including occupants, equipment, and accessories</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.7.4</td><td>Tolerances: 2% tolerance allowed only on payload requirement</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.8 CHARACTERISTICS</th></tr>
            <tr><td>1.2.8</td><td>Gradeability 50%; lateral tilt 30 degrees; approach and departure angles 30 degrees</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.9 CONFIGURATION</th></tr>
            <tr><td>1.2.9.1</td><td>Seating for 10 (1+1+8); 2nd row seats facing opposite direction; all seats with seat belts</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.9.2</td><td>Four side doors hinged forward</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.9.3</td><td>Rear door must open outward</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.9.4</td><td>Door sills around all doors</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.9.5</td><td>11 loopholes (firing ports)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.9.6</td><td>Split windshield (two-piece), no tinting</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.9.7</td><td>Blinds for all windows</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.10 BALLISTICS</th></tr>
            <tr><td>1.2.10.1</td><td>Police protection cell compliant with CEN BR 7, including opaque and transparent armor</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.10.2</td><td>Underbody blast protection certification required where specified (include certified underbody protection)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.11 GRAPHICS AND PAINT</th></tr>
            <tr><td>1.2.11.1</td><td>Paint must comply with CIELAB values under D65 illuminant and 10 degree observer (per specified color sets)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.11.2</td><td>Vehicle identification stickers must comply with PMES standard</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.11.3</td><td>Unmarked vehicle option: metallic, solid, or pearlescent color per requesting agency; must maintain CIELAB compliance</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.12 MANUALS AND ACCESSORIES</th></tr>
            <tr><td>1.2.12.1</td><td>At least 4 cameras integrated with monitor and one-way audio pickup (microphone)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.12.2</td><td>AM/FM radio with clock and two speakers; pre-installed for connection of external antenna</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.12.3</td><td>Lifting tools for wheel replacement</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.12.4</td><td>Electric external rearview mirrors</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.12.5</td><td>Electric winch with minimum pulling capacity 4,000 kg, integrated with front armoring</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.12.6</td><td>Spare wheel equipped with run-flat system</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.12.7</td><td>Portuguese manuals: vehicle operation manual and preventive maintenance manual</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.12.8</td><td>Training: minimum 20 hours for 10 operators (8 operators and 2 mechanics)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.12.8.a</td><td>Training topic: vehicle overview and operator familiarization</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.12.8.b</td><td>Training topic: safety procedures and emergency response</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.12.8.c</td><td>Training topic: pre-use checks, maintenance basics, and troubleshooting</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.12.8.d</td><td>Training topic: driving techniques and limitations of armored vehicle</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.12.8.e</td><td>Training topic: communications and signaling equipment overview (if installed)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.12.8.f</td><td>Training topic: environmental and HSE considerations (temperature, terrain, load)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.13 ACOUSTIC SIGNALING SYSTEM (SIREN)</th></tr>
            <tr><td>1.2.13.1</td><td>Amplifier output at least 100W at 11 ohms; one acoustic emitter; at least 3 distinct sounds</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.13.2</td><td>Minimum sound pressure level 110 dB at 1 meter from emitter (measured per defined method)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.13.3</td><td>Siren must be discreet and not visibly mounted in the vehicle grille</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.13.4</td><td>Additional low-frequency (sub) siren permitted, provided it does not replace the primary siren</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.13.5</td><td>Emitter must have sealed driver; must not be musical</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.13.6</td><td>Mounting and attachment points per specified engineering design</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.13.7</td><td>No electromagnetic interference in radio or other installed systems when siren operates</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.14 VISUAL SIGNALING SYSTEM</th></tr>
            <tr><td>1.2.14.1</td><td>System must withstand Brazilian weather conditions: temperature, humidity, rain, dust, vibration</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.2</td><td>Anti-corrosion and abrasion resistance for all external lighting components</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.3</td><td>Automatic load management: allow hazard lights with engine off; manage loads across lighting and aux systems</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.4</td><td>Automatic shutdown before battery voltage becomes too low to restart engine</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.5</td><td>Pulse-width modulation (PWM) current management for lighting modules</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.6.a</td><td>LED color performance: Red (623–633 nm), intensity ≥ 470 cd (SAE J595 Class 1)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.6.b</td><td>LED color performance: Blue (464–474 nm), intensity ≥ 310 cd (SAE J595 Class 1)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.6.c</td><td>LED color performance: Amber (586–596 nm), intensity ≥ 165 cd (SAE J595 Class 1)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.6.d</td><td>LED color performance: White (400–700 nm), intensity ≥ 120 cd (SAE J595 Class 1)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.7</td><td>Main lightbar: low profile, length > 90% of vehicle width, mounted above B-pillar on roof rails or equivalent</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.7.a</td><td>Lightbar must be tested by accredited lab: optical performance, electrical, mechanical, and environmental tests</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.7.b</td><td>Lightbar modules: red/blue modules at ends and center, with required flash patterns and day/night modes</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.7.c</td><td>LED lifetime minimum 30,000 hours; power 3W or higher per LED (as specified)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.7.d</td><td>Flash patterns required: ROUND, QTI, STOP, EMERGENCY (as defined)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.8</td><td>Alley lights: minimum 1,500 lumens each side, integrated into lightbar or as separate units</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.9</td><td>Secondary front lighting: 4x 3W modules, each with 6 LEDs alternating red/blue; 12V; anti-corrosion; 30,000h lifetime</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.10</td><td>Secondary rear lighting: 4x 3W modules, each with 6 LEDs alternating red/blue; 12V; anti-corrosion; 30,000h lifetime</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.11</td><td>Traffic advisor amber bar: 5 segments (left and right), must not be installed on B-pillar; optical performance report required</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.12</td><td>Control panel: 1-DIN rack unit, with on-off buttons for each device and programmed lighting modes</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.15 COMMUNICATION EQUIPMENT PREPARATION (TETRA)</th></tr>
            <tr><td>1.2.15.1</td><td>5A fused power cable from main battery to dashboard and trunk; sufficient length; connectors provided; ignition-controlled</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.15.2</td><td>Multi-function roof antenna for GPS, GSM, UMTS, WLAN, and TETRA; omnidirectional; IP66; specified frequency ranges and gains</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.15.3</td><td>Antenna cables: 3m length, specified connectors (SMA/FME or as required), VSWR ≤ 1.5 at specified frequencies</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.15.4</td><td>Antenna mounting: plastic cover 12x12 cm on roof, with mechanical protection and sealing</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.16 COMMUNICATION EQUIPMENT PREPARATION (ANALOG TRANSCEIVER)</th></tr>
            <tr><td>1.2.16.1</td><td>Provide mounting location for Motorola PRO5100 (or equivalent) with remote head; fixed in front only</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.16.2</td><td>VHF radio spec: 42–50 MHz (primary 46–49 MHz), 60W at 13.6V, 12.5/25 kHz channels, ≥250 channels, scanning, emergency and encryption options</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.16.3</td><td>Provide pre-installation with cables accessible from driver cabin and trunk; allow fast installation without dismantling</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.16.4</td><td>External VHF antenna: omnidirectional, vertical polarization, 0 dB gain, spring base, stainless steel whip, IP56 or better, specified dimensions</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.16.5</td><td>Coax cable RG-58C (or better), 50 ohm, specified connectors, mounted through roof with sealing and reinforcement</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.16.6</td><td>Provide SWR and impedance report per vehicle at 46 MHz, with tolerance limits and measurement method</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.16.7</td><td>All signaling equipment must not interfere with communication system operation</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.16.8</td><td>Bidder responsible for antenna installation preparation, drilling and reinforcement, and all measurement/compliance actions</td><td></td><td class="col-exec"></td><td></td></tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>

        <div class="sub-heading" style="margin-top: 20px;">Item 1 – Formal Certifications Required (Refer to Vol VIII)</div>
        <table>
          <tbody>
            <tr>
              <td style="width: 8%; font-weight: 700;">3.5</td>
              <td style="width: 40%;"><strong>Ballistic Certification – APC</strong></td>
              <td style="width: 52%;">Independent accredited lab. Opaque + transparent protection level as per Annex IB. Must show test methodology + VIN linkage.</td>
            </tr>
            <tr>
              <td style="font-weight: 700;">3.6</td>
              <td><strong>Underbody Protection Certification – APC</strong></td>
              <td>Required if specified in Annex IB blast section.</td>
            </tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>
      </div>
      <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
    </div>

    <!-- PAGE 5: APC IMAGES & EVIDENCE -->
    <div class="page" id="apc-evidence">
      <div class="header">
        <div class="logo-container">
          <img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span>
        </div>
      </div>
      <div class="page-content">
        <div class="vol-identifier">VOLUME III — TECHNICAL QUALIFICATION</div>
        <div class="main-heading">Visual References & Equipment Configuration (APC)</div>
        <p class="para">The following technical diagrams and visual evidence corroborate the specifications detailed in Annex IB.</p>

        <div class="img-grid">
          <div class="img-box">
            <div class="img-title">1.2.9.I & 1.2.9.II — Seating Layout & Access</div>
            <p class="para" style="font-size:10px; margin-bottom:6px;">Demonstrating 10 seats (1+1+8), 4 side doors, rear outward door, and roof escape hatch.</p>
            <div class="img-placeholder" onclick="promptImage(this)">
              <span>Click to insert/replace image<br/>(e.g., General Arrangement drawing)</span>
              <img src="" alt="" onerror="this.style.display='none'">
            </div>
          </div>
          <div class="img-box">
            <div class="img-title">1.2.9.IV — Firing Ports (Loopholes)</div>
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
            <div class="img-title">1.2.10 — Ballistic & Blast Protection Base</div>
            <p class="para" style="font-size:10px; margin-bottom:6px;">Reference for Police protection cell (CEN BR 7) and certified underbody blast integration.</p>
            <div class="img-placeholder" onclick="promptImage(this)">
              <span>Click to insert/replace image<br/>(e.g., Ballistic Cell / Chassis reinforcement)</span>
              <img src="" alt="" onerror="this.style.display='none'">
            </div>
          </div>
          <div class="img-box">
            <div class="img-title">1.2.14 — Visual Signaling (Lightbar System)</div>
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

    <!-- PAGE 6: VOL III (Item 2 Part 1) -->
    <div class="page">
      <div class="header">
        <div class="logo-container">
          <img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span>
        </div>
      </div>
      <div class="page-content">
        <div class="vol-identifier">VOLUME III — TECHNICAL QUALIFICATION</div>
        
        <div class="sub-heading" style="margin-top: 0;">C. ITEM 2 – CAV (ARMOURED SUV)</div>

        <div id="item3-7" class="main-heading" style="margin-top: 10px; font-size: 13px;">3.7 Technical Compliance Report – Annex ID</div>
        <p class="para">Must confirm compliance with ALL specifications listed below. <br/><em><strong>Note:</strong> Formal certificates are attached in Volume VIII. Visual evidence is attached on the following pages.</em></p>
        
        <table>
          <thead>
            <tr>
              <th style="width:7%">Ref</th>
              <th style="width:33%">Annex ID Requirement</th>
              <th style="width:25%">MEVA Response</th>
              <th style="width:7%">Comp.</th>
              <th style="width:28%">Evidence File / Note</th>
            </tr>
          </thead>
          <tbody>
            <tr><th colspan="5" class="group-header">1.1 OBJECT & 1.2.1 CHASSIS</th></tr>
            <tr><td>1.1.1</td><td>Armored tactical SUV for 05 personnel (driver; cmdr + 03)</td><td>Provide armored tactical SUV 1+1+3</td><td class="col-exec col-exec-tbd">TBD</td><td>See Image Section</td></tr>
            <tr><td>1.1.2</td><td>Manufactured 2024+; never used; 0 km; mfg guarantee</td><td>Confirm 2024+ and 0 km</td><td class="col-exec col-exec-tbd">TBD</td><td>Manufacturer Declaration</td></tr>
            <tr><td>1.2.1.I</td><td>Mounted on commercial chassis, reinforced for armoring</td><td>Provide reinforced commercial chassis</td><td class="col-exec col-exec-tbd">TBD</td><td>OEM Chassis Datasheet</td></tr>

            <tr><th colspan="5" class="group-header">1.2.2 ENGINE & 1.2.3 TRANSMISSION, STEERING, BRAKES</th></tr>
            <tr><td>1.2.2.I-II</td><td>Turbo diesel, Euro 4+, Power 300 HP</td><td>Confirm Euro 4+ & 300 HP</td><td class="col-exec col-exec-tbd">TBD</td><td>OEM Engine Datasheet</td></tr>
            <tr><td>1.2.2.III</td><td>Torque min 700 Nm at 1,500–2,700 rpm</td><td>Confirm torque curve</td><td class="col-exec col-exec-tbd">TBD</td><td>OEM Torque Curve</td></tr>
            <tr><td>1.2.3.I-II</td><td>Automatic ≥6 speed; Full-time 4WD</td><td>Confirm gearbox & drivetrain</td><td class="col-exec col-exec-tbd">TBD</td><td>OEM Transmission Spec</td></tr>
            <tr><td>1.2.3.III</td><td>ABS + EBD; Ventilated discs; Parking brake 60%; ESP</td><td>Confirm</td><td class="col-exec col-exec-tbd">TBD</td><td>OEM Brake/ESP Spec</td></tr>
            <tr><td>1.2.3.IV-V</td><td>Steering hydr/elec (LHD); Reinforced axles</td><td>Confirm LHD & reinforced</td><td class="col-exec col-exec-tbd">TBD</td><td>OEM Steering Spec</td></tr>

            <tr><th colspan="5" class="group-header">1.2.4 ELECTRICAL, LIGHTING, AIR CONDITIONING</th></tr>
            <tr><td>1.2.4.I</td><td>Elec capacity for adapt; 12V; ≥2 batteries</td><td>Confirm specs & 12V dual batt</td><td class="col-exec col-exec-tbd">TBD</td><td>Load Calc + OEM Spec</td></tr>
            <tr><td>1.2.4.II</td><td>LED headlights; LED int/ext lamps; HVAC cools >50°C</td><td>Confirm</td><td class="col-exec col-exec-tbd">TBD</td><td>Lighting/HVAC Specs</td></tr>

            <tr><th colspan="5" class="group-header">1.2.5 PERFORMANCE, 1.2.6 DIMENSIONS & 1.2.7 WEIGHT</th></tr>
            <tr><td>1.2.5.I-III</td><td>Fuel tank 110L (S10); Min range 700 km fully charged</td><td>Confirm specs & range</td><td class="col-exec col-exec-tbd">TBD</td><td>OEM Fuel Spec + Range Calc</td></tr>
            <tr><td>1.2.5.IV-V</td><td>Rim 18”+; Run Flat all tires; Cruise 90 km/h; Max 120 km/h</td><td>Confirm</td><td class="col-exec col-exec-tbd">TBD</td><td>Runflat Cert + OEM Spec</td></tr>
            <tr><td>1.2.6</td><td>L ≤5500, W ≤2000, H ≤2000, WB ≤3000, Clear ≥220mm</td><td>Confirm dimensions</td><td class="col-exec col-exec-tbd">TBD</td><td>GA Drawing</td></tr>
            <tr><td>1.2.7</td><td>GVWR ≤6000kg; Curb ≤5000kg; Payload ≥1000kg</td><td>Confirm</td><td class="col-exec col-exec-tbd">TBD</td><td>Weight Statement</td></tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>
      </div>
      <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
    </div>

    <!-- PAGE 7: ITEM 2 CAV MATRIX P2 -->
    <div class="page">
      <div class="header">
        <div class="logo-container">
          <img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span>
        </div>
      </div>
      <div class="page-content">
        <div class="vol-identifier">VOLUME III — TECHNICAL QUALIFICATION</div>
        <div class="main-heading" style="font-size: 13px;">3.7 Technical Compliance Report – Annex ID (Cont.)</div>

        <table>
          <thead>
            <tr>
              <th style="width:7%">Ref</th>
              <th style="width:33%">Annex ID Requirement</th>
              <th style="width:25%">MEVA Response</th>
              <th style="width:7%">Comp.</th>
              <th style="width:28%">Evidence File / Note</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1.2.3.3</td><td>ABS and EBD; ventilated disc brakes; parking/service brake holds 60% of vehicle weight; ESP present</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.3.4</td><td>Hydraulic or electric steering; factory left-hand drive; reinforced axles</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.4 ELECTRICAL, LIGHTING, AIR CONDITIONING</th></tr>
            <tr><td>1.2.4.1</td><td>Electrical capacity for adaptations; 12V system; at least two batteries</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.4.2</td><td>LED headlights; LED interior/exterior lighting; HVAC capable of cooling in environments above 50°C</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.5 PERFORMANCE</th></tr>
            <tr><td>1.2.5.1</td><td>Fuel tank capacity: 110 liters</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.5.2</td><td>Minimum range: 700 km (mixed route)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.5.3</td><td>Rim size 18 inches or more</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.5.4</td><td>Run-flat system on all tires</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.5.5</td><td>Cruise speed 90 km/h; maximum speed 120 km/h</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.6 DIMENSIONS</th></tr>
            <tr><td>1.2.6</td><td>Length ≤ 5500 mm; Width ≤ 2000 mm; Height ≤ 2000 mm; Wheelbase ≤ 3000 mm; Ground clearance ≥ 220 mm</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.7 WEIGHT</th></tr>
            <tr><td>1.2.7.1</td><td>GVWR ≤ 6,000 kg</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.7.2</td><td>Curb weight ≤ 5,000 kg</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.7.3</td><td>Payload ≥ 1,000 kg including occupants, equipment, and accessories</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.7.4</td><td>Tolerances: 2% tolerance allowed only on payload requirement</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.8 CHARACTERISTICS</th></tr>
            <tr><td>1.2.8</td><td>Ascent 50%; lateral tilt 30 degrees; approach angle 30 degrees; departure angle 20 degrees</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.9 CONFIGURATION</th></tr>
            <tr><td>1.2.9.1</td><td>Seating for 5 (1+1+3); 2nd row seats forward facing; all seats with seat belts</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.9.2</td><td>Four side doors</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.9.3</td><td>Roof hatch</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.9.4</td><td>One-piece windshield (no split)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.9.5</td><td>Door locking by key</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.10 BALLISTICS</th></tr>
            <tr><td>1.2.10.1</td><td>Protection cell compliant with VPAM Edition 3 VR7, including floor and engine protection</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.11 GRAPHICS AND PAINT</th></tr>
            <tr><td>1.2.11.1</td><td>Paint must comply with CIELAB values under D65 illuminant and 10 degree observer (per specified color sets)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.11.2</td><td>Vehicle identification stickers must comply with PMES standard</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.11.3</td><td>Unmarked vehicle option: metallic, solid, or pearlescent color per requesting agency; must maintain CIELAB compliance</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.12 MANUALS AND ACCESSORIES</th></tr>
            <tr><td>1.2.12.1</td><td>Rear view camera</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.12.2</td><td>AM/FM radio with clock and two speakers; pre-installed for external antenna</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.12.3</td><td>Lifting tools for wheel replacement</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.12.4</td><td>Electric external rearview mirrors</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.12.5</td><td>Portuguese manuals: vehicle operation manual and preventive maintenance manual</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.13 ACOUSTIC SIGNALING SYSTEM (SIREN)</th></tr>
            <tr><td>1.2.13.1</td><td>Amplifier output at least 100W at 11 ohms; one acoustic emitter; at least 3 distinct sounds</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.13.2</td><td>Minimum sound pressure level 110 dB at 1 meter from emitter (measured per defined method)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.13.3</td><td>Siren must be discreet and not visibly mounted in the vehicle grille</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.13.4</td><td>Additional low-frequency (sub) siren permitted, provided it does not replace the primary siren</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.13.5</td><td>Emitter must have sealed driver; must not be musical</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.13.6</td><td>Mounting and attachment points per specified engineering design</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.13.7</td><td>No electromagnetic interference in radio or other installed systems when siren operates</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.14 VISUAL SIGNALING SYSTEM</th></tr>
            <tr><td>1.2.14.1</td><td>System must withstand Brazilian weather conditions: temperature, humidity, rain, dust, vibration</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.2</td><td>Anti-corrosion and abrasion resistance for all external lighting components</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.3</td><td>Automatic load management and battery protection (shutdown before battery too low to restart engine)</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.4</td><td>Pulse-width modulation (PWM) current management for lighting modules</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.5</td><td>Main lightbar: low profile, length > 90% of vehicle width, compliant with SAE J595 (Class 1), installed on roof</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.6</td><td>Alley lights: minimum 1,500 lumens each side</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.14.7</td><td>Control panel: 1-DIN rack unit, with independent buttons and programmed lighting modes</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.15 COMMUNICATION EQUIPMENT PREPARATION</th></tr>
            <tr><td>1.2.15.1</td><td>TETRA preparation: 5A fused power cable from main battery to dashboard and trunk; sufficient length; ignition-controlled</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.15.2</td><td>Multi-function roof antenna for GPS, GSM, UMTS, WLAN, and TETRA; omnidirectional; IP66; specified frequency ranges and gains</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.15.3</td><td>Analog radio preparation for Motorola PRO5100 (or equivalent) including mounting location and cable routing</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.15.4</td><td>External VHF antenna preparation with coax RG-58C (or better) and SWR/impedance report per vehicle at 46 MHz</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.16 LIGHTING ASSEMBLY (UNMARKED)</th></tr>
            <tr><td>1.2.16.1</td><td>Internal warning lights: 4 internal LED lights in cabin, each 1W, connected to control panel and wiring harness</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.16.2</td><td>Front bumper/grille warning lights: 2 units, 3W each, red and blue, integrated into front structure</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.16.3</td><td>Grille modules: 4 modules, 1W each (2 red, 2 blue) integrated into grille</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.16.4</td><td>Rear warning lights: 2 units, 3W each, red and blue, installed at rear per PMES layout</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.16.5</td><td>Mirror modules: 2 modules, 1W each (red and blue), installed in external mirrors</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><th colspan="5" class="group-header">1.2.17 EMBLEMS</th></tr>
            <tr><td>1.2.17.1</td><td>Vehicle must support installation of PMES agency crest/emblems in defined locations, without interfering with armor or sensors</td><td></td><td class="col-exec"></td><td></td></tr>
            <tr><td>1.2.17.2</td><td>Emblem placement and fixation method must follow PMES standard and remain durable under operational conditions</td><td></td><td class="col-exec"></td><td></td></tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>

<div style="padding: 8px 0px; border-bottom: 4px solid var(--brand-color); margin-top: 25px; margin-bottom: 10px;">
            <div style="font-size: 12px; color: var(--brand-color); text-transform: uppercase; font-weight: 800; margin: 0; padding: 0;">
                TLC300 BALLISTIC & DYNAMICS CERTIFICATION
            </div>
        </div>

        <div style="overflow: hidden; margin-bottom: 15px; background: #fff; border: 1px solid #e5e7eb; border-radius: 6px;">
            <div style="padding: 15px;">
                 <div style="color: #333; font-weight: 800; font-size: 11pt; text-transform: uppercase; text-align: center;">VPAM VR7 CERTIFIED</div>
                 <div style="color: #777; font-size: 9pt; font-weight: 600; text-align: center; margin-bottom: 10px;">Tested & Certified by Beschussamt Ulm GmbH with 3-Star Ratings</div>
                 
                 <table style="width:100%; border-collapse:collapse; table-layout: fixed; margin-bottom: 10px;">
                    <tr>
                        <td colspan="3" style="padding: 6px 0; font-size: 8.5pt; font-weight: 800; color: #333; text-transform: uppercase;">VPAM BRV & ERV Standards</td>
                    </tr>
                    <tr>
                        <td style="width: 21%; padding: 4px 0; font-size: 8pt; color: #999; text-transform: uppercase; font-weight: 700; border-bottom: 1px solid #f5f5f5;">Ballistic</td>
                        <td style="width: 2%; padding: 4px 0; font-weight: 300; border-bottom: 1px solid #f5f5f5;">:</td>
                        <td style="width: 77%; padding: 4px 6px; font-size: 8.5pt; font-weight: 700; color: #333; text-transform: uppercase; border-bottom: 1px solid #f5f5f5;">VR7 (SS109 & DM111) | Roof & Glazing at 90°</td>
                    </tr>
                    <tr>
                        <td style="width: 21%; padding: 4px 0; font-size: 8pt; color: #999; text-transform: uppercase; font-weight: 700; border-bottom: 1px solid #f5f5f5;">Side Blast</td>
                        <td style="width: 2%; padding: 4px 0; font-weight: 300; border-bottom: 1px solid #f5f5f5;">:</td>
                        <td style="width: 77%; padding: 4px 6px; border-bottom: 1px solid #f5f5f5;">
                            <div style="font-size: 8.5pt; font-weight: 700; color: #333; text-transform: uppercase;">12.5kg PETN @ 4m with Biofidelic Dummy</div>
                            <div style="font-size: 7.5pt; font-weight: 700; color: #777; text-transform: uppercase;">Human bone fracture characteristic testing</div>
                        </td>
                    </tr>
                   <tr>
                        <td style="width: 21%; padding: 4px 0; font-size: 8pt; color: #999; text-transform: uppercase; font-weight: 700; border-bottom: 1px solid #f5f5f5;">Underbody</td>
                        <td style="width: 2%; padding: 4px 0; font-weight: 300; border-bottom: 1px solid #f5f5f5;">:</td>
                        <td style="width: 77%; padding: 4px 6px; font-size: 8.5pt; font-weight: 700; color: #333; text-transform: uppercase; border-bottom: 1px solid #f5f5f5;">DM 31 (x1) and HG 85 (x2)</td>
                    </tr>    
                     <tr>
                        <td style="width: 21%; padding: 4px 0; font-size: 8pt; color: #999; text-transform: uppercase; font-weight: 700; border-bottom: 1px solid #f5f5f5;">Roof</td>
                        <td style="width: 2%; padding: 4px 0; font-weight: 300; border-bottom: 1px solid #f5f5f5;">:</td>
                        <td style="width: 77%; padding: 4px 6px; font-size: 8.5pt; font-weight: 700; color: #333; text-transform: uppercase; border-bottom: 1px solid #f5f5f5;">DM 51 Double Charge (Standard & Hatch)</td>
                    </tr>  
                    <tr>
                        <td colspan="3" style="padding: 10px 0 6px 0; font-size: 8.5pt; font-weight: 800; color: #333; text-transform: uppercase;">PAS 300 Blast & Ballistic</td>
                    </tr>
                    <tr>
                        <td style="width: 21%; padding: 4px 0; font-size: 8pt; color: #999; text-transform: uppercase; font-weight: 700; border-bottom: 1px solid #f5f5f5;">Ballistic</td>
                        <td style="width: 2%; padding: 4px 0; font-weight: 300; border-bottom: 1px solid #f5f5f5;">:</td>
                        <td style="width: 77%; padding: 4px 6px; font-size: 8.5pt; font-weight: 700; color: #333; text-transform: uppercase; border-bottom: 1px solid #f5f5f5;">Roof tested at 45° angle</td>
                    </tr>
                    <tr>
                        <td style="width: 21%; padding: 4px 0; font-size: 8pt; color: #999; text-transform: uppercase; font-weight: 700; border-bottom: 1px solid #f5f5f5;">Side Blast</td>
                        <td style="width: 2%; padding: 4px 0; font-weight: 300; border-bottom: 1px solid #f5f5f5;">:</td>
                        <td style="width: 77%; padding: 4px 6px; font-size: 8.5pt; font-weight: 700; color: #333; text-transform: uppercase; border-bottom: 1px solid #f5f5f5;">12.5kg PETN (Pressure sensor verified)</td>
                    </tr>
                 </table>    
            </div>
            
            <div style="background: #fafafa; border-top: 1px solid #e5e7eb; padding: 15px;">
                <div style="color: #333; font-weight: 800; font-size: 10pt; text-transform: uppercase; text-align: center;">PAS 301 Drivability Certified</div>
                <div style="color: #777; font-size: 9pt; font-weight: 600; text-align: center; margin-bottom: 10px;">Dynamics & Handling Tested for VPAM VR7 LC 300</div>
                <table style="width: 100%; border-collapse: collapse; text-align: center;">
                    <tr>
                        <td style="width: 25%; padding: 5px; font-size: 8pt; font-weight: 800; color: #333; text-transform: uppercase;">Acceleration</td>
                        <td style="width: 25%; padding: 5px; font-size: 8pt; font-weight: 800; color: #333; text-transform: uppercase;">Slalom Test</td>
                        <td style="width: 25%; padding: 5px; font-size: 8pt; font-weight: 800; color: #333; text-transform: uppercase;">Fast-Lane Change</td>
                        <td style="width: 25%; padding: 5px; font-size: 8pt; font-weight: 800; color: #333; text-transform: uppercase;">Braking</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="sub-heading" style="margin-top: 20px;">Item 2 – Formal Certifications Required (Refer to Vol VIII)</div>
        <table>
          <tbody>
            <tr>
              <td style="width: 8%; font-weight: 700;">3.8</td>
              <td style="width: 40%;"><strong>Ballistic Certification – CAV</strong></td>
              <td style="width: 52%;">Independent lab. Opaque + transparent shielding per Annex ID.</td>
            </tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>
      </div>
      <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
    </div>

    <!-- PAGE 8: CAV IMAGES & EVIDENCE -->
    <div class="page" id="cav-evidence">
      <div class="header">
        <div class="logo-container">
          <img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span>
        </div>
      </div>
      <div class="page-content">
        <div class="vol-identifier">VOLUME III — TECHNICAL QUALIFICATION</div>
        <div class="main-heading">Visual References & Equipment Configuration (CAV)</div>
        <p class="para">The following technical diagrams and visual evidence corroborate the specifications detailed in Annex ID.</p>

        <div class="img-grid">
          <div class="img-box">
            <div class="img-title">1.2.9.I & 1.2.9.VI — Seating Layout & Doors</div>
            <p class="para" style="font-size:10px; margin-bottom:6px;">Demonstrating 5 seats (1+1+3), 4 forward hinge doors, and rear door access.</p>
            <div class="img-placeholder" onclick="promptImage(this)">
              <span>Click to insert/replace image<br/>(e.g., General Arrangement drawing)</span>
              <img src="" alt="" onerror="this.style.display='none'">
            </div>
          </div>
          <div class="img-box">
            <div class="img-title">1.2.10 — Ballistic Protection Cell</div>
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
            <div class="img-title">1.2.14 — Visual Signaling (Roof Bar)</div>
            <p class="para" style="font-size:10px; margin-bottom:6px;">Demonstrating LED lightbar (>90% width), Alley Lights, and overall layout.</p>
            <div class="img-placeholder" onclick="promptImage(this)">
              <span>Click to insert/replace image<br/>(e.g., Roof bar design/spec sheet snippet)</span>
              <img src="" alt="" onerror="this.style.display='none'">
            </div>
          </div>
          <div class="img-box">
            <div class="img-title">1.2.16 — Lighting Assembly (Unmarked)</div>
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

    <!-- PAGE 9: VOL IV & V CHECKLIST & PRICING-->
    <div class="page" id="vol4">
      <div class="header">
        <div class="logo-container">
          <img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span>
        </div>
      </div>
      <div class="page-content">
        <div class="vol-identifier">VOLUME IV — ECONOMIC & FINANCIAL QUALIFICATION</div>
        <div class="main-heading">Volume Summary Checklist</div>
        <table>
          <tbody>
            <tr><td style="width: 8%; font-weight: 700;">4.1</td><td style="width: 40%;"><strong>Audited Financial Statements (Last 2 Years)</strong></td><td style="width: 52%;">Balance Sheet, Income Statement, Auditor Report. Apostilled.</td></tr>
            <tr><td style="font-weight: 700;">4.2</td><td><strong>Accountant Declaration of Ratios</strong></td><td>Must show: LG &gt; 1, LC &gt; 1, SG &gt; 1. If not → Net Worth ≥ 10% of estimated contract value.<div class="info-box note" style="margin-top: 6px;"><strong>Note:</strong> Estimated value is confidential. Use conservative estimate.</div></td></tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>

        <div id="vol5" class="vol-identifier" style="margin-top: 30px;">VOLUME V — COMMERCIAL PROPOSAL</div>
        <div class="main-heading">Commercial Terms & Pricing Logic</div>
        <table>
          <tbody>
            <tr><td style="width: 8%; font-weight: 700;">5.1</td><td style="width: 40%;"><strong>Annex IG – Commercial Proposal (Imported)</strong></td><td style="width: 52%;">Separate forms for Item 1 (APC) and Item 2 (CAV). Must use equalized “K” value.</td></tr>
            <tr>
              <td style="font-weight: 700; color:var(--brand-color);" id="item5-2">5.2</td>
              <td style="color:var(--brand-color);"><strong>Commercial Pricing Schedule</strong></td>
              <td>
                Provide itemized pricing details for the proposal.
                <ul class="check-list" style="margin-top: 6px; margin-bottom: 0;">
                  <li>Unit Price (USD/BRL equivalent)</li>
                  <li>Total Batch Price</li>
                  <li>Customs & Import Duties equalization</li>
                </ul>
              </td>
            </tr>
            <tr><td style="font-weight: 700;">5.3</td><td><strong>PTAX Exchange Rate Declaration</strong></td><td>Using rate from 3 business days before March 11, 2026.</td></tr>
            <tr><td style="font-weight: 700;">5.4</td><td><strong>NCM Classification Declaration</strong></td><td>Confirm NCM 8710.00.00. Highlight ICMS, PIS, COFINS equalization.</td></tr>
            <tr><td style="font-weight: 700;">5.5</td><td><strong>Incoterm Declaration</strong></td><td>Confirm DDP (preferred) or DPU (if justified).</td></tr>
            <tr><td style="font-weight: 700;">5.6</td><td><strong>Letter of Credit Terms Declaration</strong></td><td>State LC timeframe, acceptance of risk, and confirm inclusion of LC costs.</td></tr>
            <tr><td style="font-weight: 700;">5.7</td><td><strong>Proposal Validity Declaration</strong></td><td>Minimum 180 days.</td></tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>
        
        <div class="info-box note">
          <strong>Note:</strong> All financial and commercial declarations listed above are attached as formal annexures in VOLUME VIII.
        </div>
      </div>
      <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
    </div>

    <!-- PAGE 10: VOL VI & VII CHECKLIST -->
    <div class="page" id="vol6">
      <div class="header">
        <div class="logo-container">
          <img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span>
        </div>
      </div>
      <div class="page-content">
        <div class="vol-identifier">VOLUME VI — SAMPLE & TESTING COMMITMENT</div>
        <div class="main-heading">Volume Summary Checklist</div>
        <table>
          <tbody>
            <tr><td style="width: 8%; font-weight: 700;">6.1</td><td style="width: 40%;"><strong>Testing Schedule Commitment – APC</strong></td><td style="width: 52%;">Submit within 5 days if ranked first. Minimum 15-day notice.</td></tr>
            <tr><td style="font-weight: 700;">6.2</td><td><strong>Testing Schedule Commitment – CAV</strong></td><td>Submit within 5 days if ranked first. Minimum 15-day notice.</td></tr>
            <tr><td style="font-weight: 700;">6.3</td><td><strong>Testing Logistics Cost Undertaking</strong></td><td>Confirm covering travel for 4 PMES officers to UAE. Flights, hotel, meals, internal transport.</td></tr>
            <tr><td style="font-weight: 700;">6.4</td><td><strong>Antenna Measurement Reports</strong></td><td>Required for both APC & CAV. Must show SWR at 46 MHz & 49 MHz. Signed by technician.</td></tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>

        <div id="vol7" class="vol-identifier" style="margin-top: 30px;">VOLUME VII — POST-CONTRACT COMMITMENTS</div>
        <div class="main-heading">Volume Summary Checklist</div>
        <table>
          <tbody>
            <tr><td style="width: 8%; font-weight: 700;">7.1</td><td style="width: 40%;"><strong>Warranty & After-Sales Plan</strong></td><td><ul class="check-list" style="margin-bottom:0;"><li>Warranty per table</li><li>60 working day repair max</li><li>10-year spare parts</li><li>1% spare parts reserve</li><li>Recall commitment</li></ul></td></tr>
            <tr><td style="font-weight: 700;">7.2</td><td><strong>Operator Training Plan</strong></td><td><ul class="check-list" style="margin-bottom:0; column-count: 2;"><li>20 hours</li><li>Portuguese</li><li>Espírito Santo</li><li>Max 10 per class</li><li>Certificate issued</li></ul></td></tr>
            <tr><td style="font-weight: 700;">7.3</td><td><strong>Subcontracting Declaration</strong></td><td>If applicable: max 30%, maintenance only. If none → declare no subcontracting.</td></tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>
        
        <div class="info-box note">
          <strong>Note:</strong> All commitment declarations listed above are attached as formal annexures in VOLUME VIII.
        </div>
      </div>
      <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
    </div>

    <!-- PAGE 11: ITEM 1 ATP (Part 1) -->
    <div class="page" id="item6-5">
      <div class="header">
        <div class="logo-container">
          <img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span>
        </div>
      </div>
      <div class="page-content">
        <div class="vol-identifier">VOLUME VI — SAMPLE & TESTING COMMITMENT</div>
        <div class="main-heading">6.5 Acceptance Test Compliance Statement – APC</div>
        <div class="info-box note" style="margin-bottom: 16px;">
          <strong>Commitment:</strong> Confirms vehicle will undergo Annex IC tests. Mahindra Emirates Vehicle Armouring FZ-LLC confirms full acceptance of the ATP for Item 1 exactly as defined. The contractor commits to present sample vehicles and designate specialized personnel.
        </div>

        <div class="sub-heading" style="margin-top: 0;">PHASE 1 – BEFORE DRIVING</div>
        <table>
          <thead><tr><th class="col-order">#</th><th>Activity Description (per Tender)</th><th class="col-exec">Compliance</th><th class="col-obs">Method of Fulfillment</th></tr></thead>
          <tbody>
            <tr><td class="col-order">1</td><td>Presentation of vehicles (samples) and personnel designation</td><td class="col-exec">YES</td><td>Samples and MEVA staff present</td></tr>
            <tr><td class="col-order">2</td><td>Identification of vehicles to be inspected</td><td class="col-exec">YES</td><td>VIN/chassis verification</td></tr>
            <tr><td class="col-order">3</td><td>Familiarization with documentation (manuals, prep docs)</td><td class="col-exec">YES</td><td>Full dossier provided</td></tr>
            <tr><td class="col-order">4</td><td>Visual inspection of body, interior, and exterior</td><td class="col-exec">YES</td><td>Vehicle delivered operational</td></tr>
            <tr><td class="col-order">5</td><td>Verification of technical specification data</td><td class="col-exec">YES</td><td>Matrix cross-reference</td></tr>
            <tr><td class="col-order">6</td><td>Pre-departure maintenance and operating instructions</td><td class="col-exec">YES</td><td>Technical briefing provided</td></tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>

        <div class="sub-heading">PHASE 2 – DURING DRIVING (ROAD TEST)</div>
        <table>
          <thead><tr><th class="col-order">#</th><th>Activity Description</th><th class="col-exec">Compliance</th><th class="col-obs">Method of Fulfillment</th></tr></thead>
          <tbody>
            <tr><td class="col-order">7</td><td>Safety briefing prior to road test (50 km)</td><td class="col-exec">YES</td><td>Conducted by MEVA engineer</td></tr>
            <tr><td class="col-order">8</td><td>Driving on paved roads/highways</td><td class="col-exec">YES</td><td>Compliant road operation</td></tr>
            <tr><td class="col-order">9</td><td>Observation of performance (engine, transmission, brakes)</td><td class="col-exec">YES</td><td>Systems verified</td></tr>
            <tr><td class="col-order">10</td><td>Driving on off-road test track/proving ground</td><td class="col-exec">YES</td><td>4x4/Suspension validated</td></tr>
            <tr><td class="col-order">11</td><td>Testing of all vehicle systems during operation</td><td class="col-exec">YES</td><td>Functional verification</td></tr>
            <tr><td class="col-order">12</td><td>Evaluation of drivability and ergonomics</td><td class="col-exec">YES</td><td>Configured per requirements</td></tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>

        <div class="sub-heading">PHASE 3 – AFTER DRIVING (STATIC INSPECTION)</div>
        <table>
          <thead><tr><th class="col-order">#</th><th>Activity Description</th><th class="col-exec">Compliance</th><th class="col-obs">Method of Fulfillment</th></tr></thead>
          <tbody>
            <tr><td class="col-order">13</td><td>Inspection for leaks, play, or damage after road testing</td><td class="col-exec">YES</td><td>Final inspection protocol</td></tr>
            <tr><td class="col-order">14</td><td>Final technical meeting with client for evaluation</td><td class="col-exec">YES</td><td>Contractor participation</td></tr>
            <tr><td class="col-order">15</td><td>Consolidation of final report</td><td class="col-exec">YES</td><td>Formal response commitment</td></tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>
      </div>
      <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
    </div>

    <!-- PAGE 12: ITEM 2 ATP (Part 1) -->
    <div class="page" id="item6-6">
      <div class="header">
        <div class="logo-container">
          <img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span>
        </div>
      </div>
      <div class="page-content">
        <div class="vol-identifier">VOLUME VI — SAMPLE & TESTING COMMITMENT</div>
        <div class="main-heading">6.6 Acceptance Test Compliance Statement – CAV</div>
        <div class="info-box note" style="margin-bottom: 16px;">
          <strong>Commitment:</strong> Confirms Annex IE testing. Mahindra Emirates Vehicle Armouring FZ-LLC confirms that the armored tactical SUV (Item 2) complies with Appendix ID. The contractor formally accepts execution of the ATP.
        </div>

        <div class="sub-heading" style="margin-top: 0;">PHASE 1 – BEFORE DRIVING</div>
        <table>
          <thead><tr><th class="col-order">#</th><th>Activity Description</th><th class="col-exec">Compliance</th><th class="col-obs">Method of Fulfillment</th></tr></thead>
          <tbody>
            <tr><td class="col-order">1</td><td>Presentation of vehicles and designation of specialized employees</td><td class="col-exec">YES</td><td>Sample vehicle(s) and MEVA personnel present</td></tr>
            <tr><td class="col-order">2</td><td>Identification of vehicles to be inspected as samples</td><td class="col-exec">YES</td><td>VIN/chassis identification provided</td></tr>
            <tr><td class="col-order">3</td><td>Familiarization with documentation (operating, maintenance, etc.)</td><td class="col-exec">YES</td><td>Complete documentation provided</td></tr>
            <tr><td class="col-order">4</td><td>Visual inspection of body, interior/exterior for structural integrity</td><td class="col-exec">YES</td><td>Vehicle delivered assembled</td></tr>
            <tr><td class="col-order">5</td><td>Verification of technical specification data prior to departure</td><td class="col-exec">YES</td><td>Compliance matrix cross-referenced</td></tr>
            <tr><td class="col-order">6</td><td>Pre-departure maintenance and vehicle operating instructions</td><td class="col-exec">YES</td><td>Technical briefing provided</td></tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>

        <div class="sub-heading">PHASE 2 – DURING DRIVING (ROAD TEST)</div>
        <table>
          <thead><tr><th class="col-order">#</th><th>Activity Description (50 km route)</th><th class="col-exec">Compliance</th><th class="col-obs">Method of Fulfillment</th></tr></thead>
          <tbody>
            <tr><td class="col-order">7</td><td>Safety briefing prior to road test</td><td class="col-exec">YES</td><td>Conducted by MEVA engineer</td></tr>
            <tr><td class="col-order">8</td><td>Driving on paved roads/highways up to 50 km</td><td class="col-exec">YES</td><td>Designed for highway operation</td></tr>
            <tr><td class="col-order">9</td><td>Observation of performance (engine, transmission, braking)</td><td class="col-exec">YES</td><td>Systems verified</td></tr>
            <tr><td class="col-order">10</td><td>Driving on off-road track to verify remaining technical data</td><td class="col-exec">YES</td><td>4WD and suspension validated</td></tr>
            <tr><td class="col-order">11</td><td>Testing of all vehicle systems on paved and off-road terrain</td><td class="col-exec">YES</td><td>Functional verification</td></tr>
            <tr><td class="col-order">12</td><td>Evaluation of drivability, ergonomics and operational aspects</td><td class="col-exec">YES</td><td>Configured per requirements</td></tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>

        <div class="sub-heading">PHASE 3 – AFTER DRIVING (STATIC INSPECTION)</div>
        <table>
          <thead><tr><th class="col-order">#</th><th>Activity Description</th><th class="col-exec">Compliance</th><th class="col-obs">Method of Fulfillment</th></tr></thead>
          <tbody>
            <tr><td class="col-order">13</td><td>Inspection for leaks, play, damage or operational issues</td><td class="col-exec">YES</td><td>Final inspection protocol</td></tr>
            <tr><td class="col-order">14</td><td>Final meeting with client to analyze post-test findings</td><td class="col-exec">YES</td><td>Contractor participation</td></tr>
            <tr><td class="col-order">15</td><td>Consolidation of final report and contractor positioning</td><td class="col-exec">YES</td><td>Formal cooperation commitment</td></tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>
      </div>
      <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
    </div>

    <!-- PAGE 13: ANNEX II COMPLIANCE & SIGNATURES -->
    <div class="page" id="final-declarations">
      <div class="header">
        <div class="logo-container">
          <img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span>
        </div>
      </div>
      <div class="page-content">
        <div class="vol-identifier">FINAL DECLARATIONS & SIGNATURES</div>
        
        <div class="trace">
          <strong>Traceability Header</strong>
          <span>Item: ☐ Item 1 (APC) ☐ Item 2 (CAV) &nbsp; | &nbsp; VIN/Chassis: __________________________</span>
        </div>

        <div id="annex2" class="main-heading" style="margin-top: 24px;">Compliance with Annex II – Responsibilities of the Testing Committee</div>
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
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>

        <div class="main-heading" style="margin-top: 24px;">Commitment Declaration & Signatures</div>
        <p class="para" style="font-size: 11px;">
          Mahindra Emirates Vehicle Armouring FZ-LLC hereby formally declares full acceptance of the Acceptance Testing Procedure (ATP) for both Item 1 and Item 2. The bidder commits to present sample vehicles, provide qualified technical personnel, allow dynamic road testing up to 50 km, provide complete documentation, cooperate with the Testing Committee in the issuance of the Conclusive Technical Opinion, and comply fully with Annex II regarding the authority and procedures of the Testing Committee. This declaration remains binding upon contract award.
        </p>
        
        <div class="sig-grid">
          <div class="sig-box">
            <div class="sig-badge">BIDDER</div>
            <div class="small">
              <strong>Company:</strong> Mahindra Emirates Vehicle Armouring FZ-LLC<br/>
              <strong>Document:</strong> Volume VI Acceptance Tests Undertaking<br/>
              <strong>Applicability:</strong> Common + Item 1 (APC) + Item 2 (CAV)
            </div>
            <div class="sig-line">
              Authorized Signatory: __________________________<br/><br/>
              Name: __________________________<br/><br/>
              Title: __________________________<br/><br/>
              Date: ____ / ____ / ______<br/><br/>
              Company Stamp:
            </div>
          </div>

          <div class="sig-box">
            <div class="sig-badge" style="background:var(--text-muted);">WITNESS / INTERNAL CONTROL</div>
            <div class="small" style="color:var(--text-muted);">
              Optional internal witness for submission pack control (recommended for traceability assurance).<br/>
              This does not replace PMES Testing Committee records.
            </div>
            <div class="sig-line">
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

    <!-- VOLUME VIII: ANNEXURE INDEX -->
    <div class="page" id="vol8">
      <div class="header">
        <div class="logo-container">
          <img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span>
        </div>
      </div>
      <div class="page-content">
        <div class="vol-identifier">VOLUME VIII — ANNEXURES & CERTIFICATES</div>
        <div class="main-heading">Annexure Index</div>
        <p class="para">The following pages contain the formal certificates and documentation referenced throughout Volumes I - VII.</p>
        
        <table>
          <thead>
            <tr><th style="width: 15%;">Ref</th><th style="width: 85%;">Certificate / Document Name</th></tr>
          </thead>
          <tbody>
            <tr><th colspan="2" class="group-header">Administrative & Legal (Vol I)</th></tr>
            <tr><td>Annex 1.1</td><td>Bid Cover Letter</td></tr>
            <tr><td>Annex 1.2</td><td>Corporate Legal Existence Documents (Trade License, MoA, Apostille)</td></tr>
            <tr><td>Annex 1.3</td><td>Power of Attorney – Brazilian Legal Representative</td></tr>
            <tr><td>Annex 1.4</td><td>Declarations Required by Law 14.133/2021</td></tr>
            <tr><td>Annex 1.5</td><td>Declaration of Non-Existence of Equivalent Document</td></tr>

            <tr><th colspan="2" class="group-header">Tax, Social & Labor Qualification (Vol II)</th></tr>
            <tr><td>Annex 2.1</td><td>UAE Tax Registration Certificate (FTA – TRN)</td></tr>
            <tr><td>Annex 2.2</td><td>UAE Tax Compliance Certificate</td></tr>
            <tr><td>Annex 2.3</td><td>Labor Compliance Certificate</td></tr>
            <tr><td>Annex 2.4</td><td>Bankruptcy / Insolvency Certificate</td></tr>

            <tr><th colspan="2" class="group-header">Technical Qualification (Vol III)</th></tr>
            <tr><td>Annex 3.1</td><td>Technical-Operational Capacity Certificate(s)</td></tr>
            <tr><td>Annex 3.2</td><td>Proof of Project Maturity</td></tr>
            <tr><td>Annex 3.3</td><td>Manufacturer Letter of Solidarity</td></tr>
            <tr><td>Annex 3.5</td><td>Ballistic Certification – APC</td></tr>
            <tr><td>Annex 3.6</td><td>Underbody Protection Certification – APC</td></tr>
            <tr><td>Annex 3.8</td><td>Ballistic Certification – CAV</td></tr>

            <tr><th colspan="2" class="group-header">Economic & Financial (Vol IV)</th></tr>
            <tr><td>Annex 4.1</td><td>Audited Financial Statements (Last 2 Years)</td></tr>
            <tr><td>Annex 4.2</td><td>Accountant Declaration of Ratios</td></tr>

            <tr><th colspan="2" class="group-header">Commercial & Commitments (Vol V, VI, VII)</th></tr>
            <tr><td>Annex 5.1</td><td>Annex IG – Commercial Proposal</td></tr>
            <tr><td>Annex 5.3-5.7</td><td>Commercial Declarations (PTAX, NCM, Incoterm, LC, Validity)</td></tr>
            <tr><td>Annex 6.1-6.4</td><td>Testing & Antenna Commitments</td></tr>
            <tr><td>Annex 7.1-7.3</td><td>Warranty, Training, and Subcontracting Plans</td></tr>
          </tbody>
        </table>
        <div class="doc-controls-wrapper" contenteditable="false"><button class="doc-control" onclick="addRow(this)">+ Add Row</button><button class="doc-control" onclick="removeRow(this)">- Remove Row</button><button class="doc-control" onclick="addCol(this)">+ Add Col</button><button class="doc-control" onclick="removeCol(this)">- Remove Col</button></div>
      </div>
      <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
    </div>

    <!-- CERTIFICATE PLACEHOLDER -->
    <div class="page cert-page">
      <div class="header">
        <div class="logo-container">
          <img src="meva.png" alt="MEVA Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <span style="display:none; font-size:20px; color:var(--brand-color); font-weight:800;">MEVA</span>
        </div>
      </div>
      <div class="page-content">
        <div class="main-heading cert-title">Annex: [Document Name]</div>
        <div class="cert-placeholder" contenteditable="false">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
          <h4>Attach Document: [Name]</h4>
          <p>Please append the relevant physical document here before final submission.</p>
        </div>
        <div class="doc-controls-wrapper" style="justify-content:center; margin-top:16px;" contenteditable="false">
          <button class="doc-control" onclick="addCertificate(this)">+ Duplicate Certificate Page</button>
        </div>
      </div>
      <div class="page-footer" contenteditable="false"><div class="page-footer-text"><strong>MAHINDRA EMIRATES VEHICLE ARMOURING FZ-LLC</strong> | PROPRIETARY & CONFIDENTIAL | TENDER NO. 002/2026 – PMES</div><div class="page-num"></div></div>
    </div>
     
`;

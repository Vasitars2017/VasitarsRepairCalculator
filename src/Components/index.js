import React, { useState } from "react";
import { Card, CardBody, Alert, Dropdown, Table } from "reactstrap";
import "./index.css";
import vasi from "../Assets/vasi.png";
import vasitars_logo from "../Assets/vasitars_logo.png";
const internationalNumberFormat = new Intl.NumberFormat('en-US')

const File = () => {
  let arr = [
    "Repair design lifetime",
    "Glass transition temperature",
    "Design temperature of repair",
    "Qualification test temperature",
    "Ambient test temperature",
    "95% lower confidence long-term strain",
    "Live pipe substrate temperature during installation of repair",
    "Thermal expansion coefficient of repair laminate in circumferential direction",
    "Thermal expansion coefficient of repair laminate in axial direction",
    "Thermal expansion coefficient of pipe substrate",
    "Service de-rating factor considering cyclic loading",
    "Service de-rating factor considering environmental compatibility",
    "External diameter of the pipe substrate",
    "Original wall thickness of the pipe substrate",
    "Minimum remaining wall thickness of the pipe substrate",
    "Tensile Modulus of the pipe substrate",
    "Specified Minimum Yield Strength of the pipe substrate",
    "Circumferential Tensile Modulus of the repair laminate",
    "Axial Tensile Modulus of the repair laminate",
    "Poisson ratio of the repair laminate",
    "Design internal pressure during repair installation",
    "Applied axial load",
    "Applied axial bending moment",
    "Applied shear load",
    "Applied torsional moment",
    "Repair thickness increase factor",
    "Design internal pressure",
    "Lapshear strength of the adhesive with the resin system",
    "Per ply thickness of the repair laminate",
    "Characteristic length of the defect",
  ];

  let arr1 = [
    "Repair design lifetime",
    "Glass transition temperature",
    "Design temperature of repair",
    "Qualification test temperature",
    "Ambient test temperature",
    "95% lower confidence long-term strain",
    "Live pipe substrate temperature during installation of repair",
    "Thermal expansion coefficient of repair laminate in circumferential direction",
    "Thermal expansion coefficient of repair laminate in axial direction",
    "Thermal expansion coefficient of pipe substrate",
    "Service de-rating factor considering cyclic loading",
    "Service de-rating factor considering environmental compatibility",
    "External diameter of the pipe substrate",
    "Original wall thickness of the pipe substrate",
    "Tensile Modulus of the pipe substrate",
    "Specified Minimum Yield Strength of the pipe substrate",
    "Circumferential Tensile Modulus of the repair laminate",
    "Axial Tensile Modulus of the repair laminate",
    "Poisson ratio of the repair laminate",
    "Shear Modulus of the repair laminate",
    "95% lower confidence limit of Energy Release Rate of Composite Laminate",
    "Applied axial load",
    "Applied axial bending moment",
    "Applied shear load",
    "Applied torsional moment",
    "Repair thickness increase factor",
    "Characteristic length of the defect",
    "Design internal pressure",
    "Lapshear strength of the adhesive with the resin system",
    "Per ply thickness of the repair laminate"
  ];

  const [hide1, sethide1] = useState(true);
  const [hide2, sethide2] = useState(false);
  const [datav, setdatav] = useState({
    val1: 0,
    val2: 0,
    val3: 0,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
    val9: 0,
    val10: 0,
    val11: 0,
    val12: 0,
    val13: 0,
    val14: 0,
    val15: 0,
    val16: 0,
    val17: 0,
    val18: 0,
    val19: 0,
    val20: 0,
    val21: 0,
    val22: 0,
    val23: 0,
    val24: 0,
    val25: 0,
    val26: 0,
    val27: 0,
    val28: 0,
  });

  const [slide, setslide] = useState("");
  const [res, setresult] = useState([{ val1: 0, val2: 0, val3: 0,val4:0,val5:0,val6:0,val7:0 }]);

  const {
    val1,
    val2,
    val3,
    val4,
    val5,
    val6,
    val7,
    val8,
    val9,
    val10,
    val11,
    val12,
    val13,
    val14,
    val15,
    val16,
    val17,
    val18,
    val19,
    val20,
    val21,
    val22,
    val23,
    val24,
    val25,
    val26,
    val27,
    val28,
    val29,val30,val31
  } = datav;
  const piee=3.14159;
  function solve(a, b, c) {
    var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    if(result>result2)return [result2,result];
    return [result, result2];
  }

  function cuberoot(x) {
    var y = Math.pow(Math.abs(x), 1 / 3);
    return x < 0 ? -y : y;
  }

  function solveCubic(a, b, c, d) {
    if (Math.abs(a) < 1e-8) {
      // Quadratic case, ax^2+bx+c=0
      a = b;
      b = c;
      c = d;
      if (Math.abs(a) < 1e-8) {
        // Linear case, ax+b=0
        a = b;
        b = c;
        if (Math.abs(a) < 1e-8)
          // Degenerate case
          return [];
        return [-b / a];
      }

      var D = b * b - 4 * a * c;
      if (Math.abs(D) < 1e-8) return [-b / (2 * a)];
      else if (D > 0)
        return [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
      return [];
    }

    // Convert to depressed cubic t^3+pt+q = 0 (subst x = t - b/3a)
    var p = (3 * a * c - b * b) / (3 * a * a);
    var q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
    var roots;

    if (Math.abs(p) < 1e-8) {
      // p = 0 -> t^3 = -q -> t = -q^1/3
      roots = [cuberoot(-q)];
    } else if (Math.abs(q) < 1e-8) {
      // q = 0 -> t^3 + pt = 0 -> t(t^2+p)=0
      roots = [0].concat(p < 0 ? [Math.sqrt(-p), -Math.sqrt(-p)] : []);
    } else {
      var D = (q * q) / 4 + (p * p * p) / 27;
      if (Math.abs(D) < 1e-8) {
        // D = 0 -> two roots
        roots = [(-1.5 * q) / p, (3 * q) / p];
      } else if (D > 0) {
        // Only one real root
        var u = cuberoot(-q / 2 - Math.sqrt(D));
        roots = [u - p / (3 * u)];
      } else {
        // D < 0, three roots, but needs to use complex numbers/trigonometric solution
        var u = 2 * Math.sqrt(-p / 3);
        var t = Math.acos((3 * q) / p / u) / 3; // D < 0 implies p < 0 and acos argument in [-1..1]
        var k = (2 * piee) / 3;
        roots = [u * Math.cos(t), u * Math.cos(t - k), u * Math.cos(t - 2 * k)];
      }
    }

    // Convert back from depressed cubic
    for (var i = 0; i < roots.length; i++) roots[i] -= b / (3 * a);

    return roots;
  }

  const result = (e) => {
    e.preventDefault();
    let ec00 = 0.003061 * 10 ** (-0.0044 * val1);
    let ea00 = 0.003061 * 10 ** (-0.0044 * val1);
    let Tm = val2 - 20;
    let fT1 = 0.0000625 * (Tm - val3) ** 2 + 0.00125 * (Tm - val3) + 0.7;
    let fT2 =
      0.0000625 * (Tm - val3 - (val4 - val5)) ** 2 +
      0.00125 * (Tm - val3 - (val4 - val5)) +
      0.7;
    let fperf = 0.612 * 10 ** (-0.0043 * val1);
    let ec0 = fperf * fT2 * val6;
    let ea0 = fperf * fT2 * val6;
    let ecT = fT1 * ec0 - Math.abs((val3 - val7) * (val10 - val8) * 10 ** -6);
    let eaT = fT1 * ea0 - Math.abs((val3 - val7) * (val10 - val9) * 10 ** -6);
    let ec = val11 * val12 * ecT;
    let ea = val11 * val12 * eaT;
    let Eac = Math.sqrt(val18 * val19);
    let Ps = (0.72 * (2 * val15 * val17)) / val13;
    let Pcr = (4 / (piee * val13 ** 2)) * (val24 + (2 * val25) / val13);
    let Peq = 0;
    if (val27 >= Pcr)
      Peq =
        val27 *
        (1 +
          (16 / (piee ** 2 * val13 ** 4 * val27 ** 2)) *
            (val24 + (2 * val25) / val13) ** 2);
    else
      Peq =
        val27 + (4 / (piee * val13 ** 2)) * (val24 + (2 * val25) / val13);

    let Feq =
      (piee * val27 * val13 ** 2) / 4 +
      Math.sqrt(val22 ** 2 + 4 * val24 ** 2) +
      (4 / val13) * Math.sqrt(val23 ** 2 + val25 ** 2);

    let Z =
      (Peq * val13) / (2 * val18) +
      (val20 * Feq) / (piee * val13 * val18) -
      (Ps * val13) / (2 * val18);
    let Y = (val21 * val13) / 2;
    let A = ec * val18;
    let B = ec * val16 * val15 - Z * val18 + Y;
    let C = -Z * val16 * val15;
    let E = [A, B, C];
    let roots = solve(E[0], E[1], E[2]);
    let tminc = roots[1];
    let tmina =
      (1 / ea) *
      (Feq / (piee * val13 * val19) - (Peq * val13 * val20) / (2 * val18));
    let tmin =val26*Math.max(tminc, tmina);

    let N = tmin /val29;
    if(N>1){
      if((N/Math.round(N))>1)N=(Math.round(N)+1);
      else
        N=Math.round(N);
    }
    else
    {
      if(N>0){
        N=Math.round(N)+1;
      }
      else
        N=1;
    }
    let tdesign = N * val29;
    let lover1 = 2 * Math.sqrt(val13 * val14);
    let lover2 = 0,
      ltaper = 0;
    if (N > 3) lover2 = (3 * val19 * ea * tdesign) / val28;
    else lover2 = (3 * val19 * ea * 0.75 * 3) / val28;

    let lover = Math.max(lover1, lover2);

    if (N > 3) ltaper = 5 * tdesign;
    else ltaper = 5 * val29 * 3;
    let L = 2 * lover + val30 + 2 * ltaper;
    let L1=Math.round(L);
    if (N > 3) setresult({ val1: tdesign, val2: N, val3: tminc,val4:tmina,val5: lover,val6:ltaper,val7:L1});
    else setresult({ val1: 3 * 0.75, val2: 3, val3: tminc,val4:tmina,val5: lover,val6:ltaper,val7:L1 });
    sethide2(true);
    
  };
  const result_1 = (e) => {
    e.preventDefault();
    let ec00 = 0.003061 * 10 ** (-0.0044 * val1);
    let ea00 = 0.003061 * 10 ** (-0.0044 * val1);
    let Tm = val2 - 30;
    let fT1 = 0.0000625 * (Tm - val3) ** 2 + 0.00125 * (Tm - val3) + 0.7;
    let fT2 =
      0.0000625 * (Tm - val3 - (val4 - val5)) ** 2 +
      0.00125 * (Tm - val3 - (val4 - val5)) +
      0.7;
    let fperf = 0.612 * 10 ** (-0.0043 * val1);
    let ec0 = fperf * fT2 * val6;
    let ea0 = fperf * fT2 * val6;
    let ecT = fT1 * ec0 - Math.abs((val3 - val7) * (val10 - val8) * 10 ** -6);
    let eaT = fT1 * ea0 - Math.abs((val3 - val7) * (val10 - val9) * 10 ** -6);
    let ec = val11 * val12 * ecT;
    let ea = val11 * val12 * eaT;
    let Eac = Math.sqrt(val17 * val18);
    let Pcr = (4 / (piee * val13 ** 2)) * (val24 + (2 * val25) / val13);
    let Peq = 0;
    if (val28 >= Pcr)
      Peq =
        val28 *
        (1 +
          (16 / (piee ** 2 * val13 ** 4 * val28 ** 2)) *
            (val24 + (2 * val25) / val13) ** 2);
    else
      Peq =
        val28 + (4 / (piee * val13 ** 2)) * (val24 + (2 * val25) / val13);

    let Feq =
      (piee * val28 * val13 ** 2) / 4 +
      Math.sqrt(val22 ** 2 + 4 * val24 ** 2) +
      (4 / val13) * Math.sqrt(val23 ** 2 + val25 ** 2);

    let tmina =
      (1 / ea) *
      (Feq / (piee * val13 * val18) - (Peq * val13 * val19) / (2 * val17));
    console.log(Peq,Feq)
    let fleak = 0.666 * 10 ** (-0.01584 * (val1 - 1));

    let a1 = (1 - val19 ** 2) / Eac;
    let b1 = (val28 / (fT2 * fleak)) ** 2;
    let A1 = (a1 * b1 * val27) / piee - 0.001 * val21;
    let B1 = (3 * b1 * val27 ** 2) / (64 * val20);
    let C1 = 0;
    let D1 = (3 * a1 * b1 * val27 ** 4) / 512;
    let E1 = [A1, B1, C1, D1];

    let roots = solveCubic(E1[0], E1[1], E1[2], E1[3]);
    let tminc = roots[0];

    // let a2 = (1-val19**2)/Eac
    // let b2 = (P/(fT2*fleak))**2
    // let c2 = (8 + (5*val19))/(10+(10*val19))
    // let A2 = (((a2*b2*w*Math.pi)/4)-(0.001*Glcl)) 
    // let B2 = ((3*b2*c2*w**2)/(16*G))
    // let C2 = 0
    // let D2 = (a2*b2*w**4)/24
    // let E2 = [A2, B2, C2, D2]

    // let roots2 =  solveCubic(E2[0], E2[1], E2[2], E2[3]);
    // let tminc2 = fth*roots2[0]
    // let tminc3 = fth*(b2*val13**2)/(8*Eac*Glcl)

    // let tmin = Math.max(tminc2, tminc3);

    // let a3 = (1-val19**2)/Eac
    // let b3 = (P/(fT2*fleak))**2
    // let c3 = (Eac+(8*G))/(4*G*11520)

    // let A3 = (((a3*b3*val13*phi*math.pi)/8)-(0.001*Glcl))
    // let B3 = 0
    // let C3 = 0
    // let D3 = ((a3*b3*val13**4*phi**4)/384)+(a3*b3*c3*D**4*phi**6)
    let tmin = val26 * Math.max(tminc, tmina) 

    let N = tmin / val30;

    if(N>1){
      if((N/Math.round(N))>1)N=(Math.round(N)+1);
      else
        N=Math.round(N);
    }
    else
    {
      if(N>0){
        N=Math.round(N)+1;
      }
      else
        N=1;
    }

    let tdesign = N * val30;

    let lover1 = 2 * Math.sqrt(val13 * val14);
    let lover2 = 0,
      ltaper = 0;
    if (N > 3) lover2 = (3 * val18 * ea * tdesign) / val29;
    else lover2 = (3 * val18 * ea * 0.75 * 3) / val29;

    let lover = Math.max(lover1, lover2);

    if (N > 3) ltaper = 5 * tdesign;
    else ltaper = 5 * val30 * 3;

    let L = 2 * lover + val27 + 2 * ltaper;
    let L1 = Math.round(L);
    if (N > 3) setresult({ val1: tdesign, val2: N, val3: tminc,val4:tmina,val5: lover,val6:ltaper,val7:L1});
    else setresult({  val1: 3 * 0.75, val2: 3, val3: tminc,val4:tmina,val5: lover,val6:ltaper,val7:L1  });
    sethide2(true);
  };

  function isNum(c) {
    return c >= '0' && c <= '9';
  }
  
  const gop=(val)=>{
    for(let i of val)
    {
      if(i==='.')return 1;
    }
    return 0;
  }

  const solved=(val)=>{
    if(val==='' ||!isNum(val[val.length-1]) ){
      return val;
  }
  // let y=-1;let s=val.toString();
  // for(let i=0;i<val.toString().length;i++)
  // {
  //     if(s[i]==='.')y++;
  //     if(y===0 && )
  // }
  if(gop(val) && val[val.length-1]==='0')return (val.replace(/\,/g,''));
  let tmp  = parseFloat(val.replace(/\,/g,''))
  return tmp;
  }


  const handlechage = (e) => {

    if (e.target.value === "Non - Leaking" || e.target.value === "Leaking")
      sethide1(false);
    else sethide1(true);
    if (e.target.value === "Non - Leaking") setslide("Non - Leaking");
    else if (e.target.value === "Leaking") setslide("Leaking");
    else {
      setslide("");
      sethide2(false);
    }
    setdatav({
      val1: 0,
      val2: 0,
      val3: 0,
      val4: 0,
      val5: 0,
      val6: 0,
      val7: 0,
      val8: 0,
      val9: 0,
      val10: 0,
      val11: 0,
      val12: 0,
      val13: 0,
      val14: 0,
      val15: 0,
      val16: 0,
      val17: 0,
      val18: 0,
      val19: 0,
      val20: 0,
      val21: 0,
      val22: 0,
      val23: 0,
      val24: 0,
      val25: 0,
      val26: 0,
      val27: 0,
      val28: 0,
      val29:0,val30:0,
      val31:0
    })
    sethide2(false);
    for(let i=0;i<30;i++)
    {
      let data="val"+(i+1);
      const doc=document.getElementById(data);
      doc.value='';
      // doc.setAttribute("value",'');
      console.log(document.getElementById(data).value);
    }
  };
  return (
    <div style={{ backgroundColor: "#bcebca" }} className="main-con">
      <div className="nav-p d-flex" style={{ width: "100%" }}>
        <a href="https://www.vasitars.com/" target="_blank">
          <img
            className="p-1"
            src={vasi}
            style={{ width: 130, height: "50px", marginLeft: 20, marginTop: 8 }}
          />
        </a>
      </div>
      <div style={{ backgroundColor: "#f3f79e", height: "50px" }}>
        <div className="d-flex align-items-center">
          <h2 className="title p-3">Repair Design Calculations</h2>
        </div>
      </div>
      <div className="d-flex justify-content-center p-5">
        <Card
          style={{
            borderWidth: "0.6px",
            borderColor: "black",
            width: "80%",
            minWidth: 330,
          }}
          className="d-flex align-items-center"
        >
          <CardBody style={{ width: "100%" }} className="p-3">
            <form
              onSubmit={(e) => {
                slide === "Non - Leaking" ? result(e) : result_1(e);
              }}
            >
              <div className="container">
                <div className="row p-3">
                  <div className="butt">
                    <h1 className="tit d-flex">
                      Select Leaking or Non-Leaking
                    </h1>
                    <div className="line"></div>
                    <div className="d-flex p-5">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => handlechage(e)}
                      >
                        <option className={slide === "" ? "" : "d-none"}>
                          ----Select----
                        </option>
                        <option>Leaking</option>
                        <option>Non - Leaking</option>
                      </select>
                    </div>
                    <div className={hide1 ? "d-none" : "leaking"}>
                      <h1 className="tit d-flex">Give Inputs</h1>
                      <div className="line"></div>
                      <Table responsive className="align-middle ">
                        <tbody style={{ zIndex: "-5", overflowY: "hidden" }}>
                          {(slide === "Non - Leaking" ? (arr.map(
                            (val, index) => {
                              const data = "val" + (index + 1);
                              return (
                                <tr key={index} className="india">
                                
                                  <td
                                    style={{
                                      textAlign: "start",
                                      whiteSpace: "pre-line",
                                    }}
                                  >
                                    {val}
                                  </td>
                                  <td>
                                    <input
                                    id={data}
                                      style={{
                                        width: "100%",
                                        textAlign: "center",
                                        border: "1px solid #C4C4C4",
                                      }}
                                   
                                      type="text"
                                      required
                                      
                                      onChange={(e) =>
                                        setdatav({
                                          ...datav,
                                          [data]:solved(e.target.value),
                                        })
                                      }
                                    />
                                  </td>
                                </tr>
                              );
                            }
                          )):(arr1.map(
                            (val, index) => {
                              const data = "val" + (index + 1);
                              return (
                                <tr key={index} className="india">
                                   
                                  <td
                                    style={{
                                      textAlign: "start",
                                      whiteSpace: "pre-line",
                                    }}
                                  >
                                    {val}
                                  </td>
                                  <td>
                                    <input
                                    id={data}
                                      style={{
                                        width: "100%",
                                        textAlign: "center",
                                        border: "1px solid #C4C4C4",
                                      }}
                                      type="text"
                                      required
                                      
                                      onChange={(e) =>
                                        setdatav({
                                          ...datav,
                                          [data]:solved(e.target.value),
                                        })
                                      }
                                    />
                                  </td>
                                </tr>
                              );
                            })
                          ))}
                        </tbody>
                      </Table>
                    </div>
                    <div className="d-flex flex-column">
                      <div
                        style={{ margin: 15 }}
                        className={hide1 ? "d-none" : "d-flex"}
                      >
                        <button type="submit" className="btn btn-primary">
                          Calculate
                        </button>
                      </div>
                    </div>
                    {hide2 ? (
                      <div>
                        <h1 className="tit d-flex">Outputs</h1>
                        <div className="line"></div>
                        <Table
                          responsive
                          className="table-roi align-middle table-centered1"
                        >
                          <tbody style={{ zIndex: "-5", overflowY: "hidden" }}>
                            <tr key={1}>
                              <td style={{ textAlign: "start" }}>
                              The design thickness of the repair laminate
                              </td>
                              <td>
                                <input
                                  disabled
                                  value={res.val1}
                                  style={{
                                    width: "100%",
                                    textAlign: "center",
                                    border: "1px solid #C4C4C4",
                                  }}
                                  type="text"
                                />
                              </td>
                            </tr>
                            <tr key={2}>
                              <td style={{ textAlign: "start" }}>
                                The number of layers required
                              </td>
                              <td>
                                <input
                                  disabled
                                  value={res.val2}
                                  style={{
                                    width: "100%",
                                    textAlign: "center",
                                    border: "1px solid #C4C4C4",
                                  }}
                                  type="text"
                                />
                              </td>
                            </tr>
                            <tr key={3}>
                              <td style={{ textAlign: "start" }}>
                              The minimum repair laminate thickness in circumferential direction is
                              </td>
                              <td>
                                <input
                                  disabled
                                  value={res.val3}
                                  style={{
                                    width: "100%",
                                    textAlign: "center",
                                    border: "1px solid #C4C4C4",
                                  }}
                                  type="text"
                                />
                              </td>
                            </tr>
                            <tr key={4}>
                              <td style={{ textAlign: "start" }}>
                              The minimum repair laminate thickness in axial direction is
                              </td>
                              <td>
                                <input
                                  disabled
                                  value={res.val4}
                                  style={{
                                    width: "100%",
                                    textAlign: "center",
                                    border: "1px solid #C4C4C4",
                                  }}
                                  type="text"
                                />
                              </td>
                            </tr>
                            <tr key={5}>
                              <td style={{ textAlign: "start" }}>
                              The axial extent of repair
                              </td>
                              <td>
                                <input
                                  disabled
                                  value={res.val5}
                                  style={{
                                    width: "100%",
                                    textAlign: "center",
                                    border: "1px solid #C4C4C4",
                                  }}
                                  type="text"
                                />
                              </td>
                            </tr>
                            <tr key={6}>
                              <td style={{ textAlign: "start" }}>
                              The minimum taper length of repair
                              </td>
                              <td>
                                <input
                                  disabled
                                  value={res.val6}
                                  style={{
                                    width: "100%",
                                    textAlign: "center",
                                    border: "1px solid #C4C4C4",
                                  }}
                                  type="text"
                                />
                              </td>
                            </tr>
                            <tr key={7}>
                              <td style={{ textAlign: "start" }}>
                              The total axial repair length
                              </td>
                              <td>
                                <input
                                  disabled
                                  value={res.val7}
                                  style={{
                                    width: "100%",
                                    textAlign: "center",
                                    border: "1px solid #C4C4C4",
                                  }}
                                  type="text"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    ) : (
                      <p
                        style={{
                          textAlign: "start",
                          marginTop: 7,
                          whiteSpace: "pre-line",
                        }}
                        className={hide1 ? "d-none" : "d-flex"}
                      >
                        Note: # implies that field is not mandatory (default
                        values are assumed). Rest all are compulsory.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default File;

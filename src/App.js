import "./App.css";
import React, { useState, useEffect } from "react";
import img1 from "./pubic/Images/image1.jpg";
import img2 from "./pubic/Images/image2.jpg";
import { sendFormDetails } from "./API/Form";

function App() {
  const [checked, setchecked] = useState(false);
  const [PersonalDetails, setPersonalDetails] = useState({
    date: "",
    name: "",
    surname: "",
    email: "",
    mobile: "",
    paddress: "",
    GNA: "",
    gpnotified: "no",
    gender: "",
    dob: "",
    dod: "",
    returndate: "",
  });

  const [CountryStay, setCountryStay] = useState({
    country_1: "",
    country_1_stay: "",
    country_1_remote: "",
    country_2: "",
    country_2_stay: "",
    country_2_remote: "",
    country_3: "",
    country_3_stay: "",
    country_3_remote: "",
    country_4: "",
    country_4_stay: "",
    country_4_remote: "",
    modeoft: "",
  });

  const [FeelWellDetails, setFeelWellDetails] = useState({
    feel_well: "",
    feel_well_details: "",
    immunisation: "",
    immunisation_details: "",
    recent_or_past: "",
    recent_or_past_details: "",
    current_or_repeat: "",
    current_or_repeat_details: "",
    allergies: "",
    allergies_details: "",
    reaction: "",
    reaction_details: "",
    hypersensitive: "",
    hypersensitive_details: "",
    family_suffer: "",
    familysuffer_details: "",
    past_history: "",
    past_history_details: "",
    impairment: "",
    impairment_details: "",
    anaemia: "",
    anaemia_details: "",
    radiotherapy: "",
    radiotherapy_details: "",
    have_any_history: "",
    have_any_history_details: "",
  });

  const [VaccinationDetails, setVaccinationDetails] = useState({
    dtp: "",
    typhd: "",
    hepA: "",
    hepB: "",
    meni: "",
    yellowf: "",
    rabies: "",
    jabB: "",
    influ: "",
    shingles: "",
    meniB: "",
    tickBE: "",
    chknpx: "",
    malaria: "",
  });

  const [WomenInformation, setWomenInformation] = useState({
    pregnancy: "",
    pregnancy_details: "",
    breastfeeding: "",
    breastfeeding_details: "",
  });

  const setPersonalDetailhandler = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    if (e.target.name == "notify" && PersonalDetails.gpnotified == "yes") {
      setPersonalDetails({
        ...PersonalDetails,
        gpnotified: "no",
      });
      setchecked(!checked);
    } else if (
      e.target.name == "notify" &&
      PersonalDetails.gpnotified == "no"
    ) {
      setPersonalDetails({
        ...PersonalDetails,
        gpnotified: "yes",
      });
      setchecked(!checked);
    } else {
      setPersonalDetails({
        ...PersonalDetails,
        [e.target.name]: e.target.value,
      });
    }
  };

  const setCountryChangeHandler = (e) => {
    setCountryStay({
      ...CountryStay,
      [e.target.name]: e.target.value,
    });
  };

  const setFeelWellDetailsHandler = (e) => {
    setFeelWellDetails({
      ...FeelWellDetails,
      [e.target.name]: e.target.value,
    });
  };

  const setVaccinationDetailsHandler = (e) => {
    setVaccinationDetails({
      ...VaccinationDetails,
      [e.target.name]: e.target.value,
    });
  };

  const setWomenInformationHandler = (e) => {
    setWomenInformation({
      ...WomenInformation,
      [e.target.name]: e.target.value,
    });
  };

  const submitFormHandler = (e) => {
    console.log(1);
    e.preventDefault();
    const formDetails = {
      ...PersonalDetails,
      ...VaccinationDetails,
      ...WomenInformation,
      ...CountryStay,
      ...FeelWellDetails,
    };
    console.log(formDetails);
    sendFormDetails(formDetails).then((data) => {
      if (data.error) {
        alert("Unsuccessfull!");
      } else {
        alert("Successfull!");
      }
    });
  };

  return (
    <div className="container">
      <div className="images">
        <img src={img1} className="img1" />
        <h2 className="sign">@</h2>
        <img src={img2} className="img2" />
      </div>
      <div className="header">
        <h6>Travel Clinic Risk Asses</h6>
        <h6 style={{ float: "right" }}>
          Date -{" "}
          <input type="date" name="date" onChange={setPersonalDetailhandler} />
        </h6>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col" colspan="2">
              Pateint Personal Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Title:<span className="tab"></span>Mr:
              <span className="tab"></span>Miss:<span className="tab"></span>Ms:
              <span className="tab"></span>Mrs:<span className="tab"></span>Dr:
            </td>
            <td rowspan="2">
              Pateint Address:{" "}
              <textarea
                name="paddress"
                onChange={setPersonalDetailhandler}
                cols="5"
                style={{ width: "100%" }}
                rows="5"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>
              Name:{" "}
              <input
                type="text"
                name="name"
                onChange={setPersonalDetailhandler}
              />
            </td>
          </tr>
          <tr>
            <td>
              Surname:{" "}
              <input
                type="text"
                onChange={setPersonalDetailhandler}
                name="surname"
              />
            </td>
            <td rowspan="2">
              GD Name and Address:
              <textarea
                name="GNA"
                onChange={setPersonalDetailhandler}
                id=""
                cols="5"
                style={{ width: "100%" }}
                rows="5"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>
              Email:{" "}
              <input
                type="email"
                name="email"
                onChange={setPersonalDetailhandler}
              />
            </td>
          </tr>
          <tr>
            <td>
              Mobile:{" "}
              <input
                type="number"
                name="mobile"
                onChange={setPersonalDetailhandler}
              />
            </td>
            <td rowspan="2">
              Would you like your GP to notified of this consultation?{" "}
              <input
                type="checkbox"
                checked={checked}
                onChange={setPersonalDetailhandler}
                name="notify"
              />
            </td>
          </tr>
          <tr>
            <td>
              Gender:
              <span className="tab"></span>M:{" "}
              <input
                type="checkbox"
                name="gender"
                value="male"
                onChange={setPersonalDetailhandler}
              />
              <span className="tab"></span>F:{" "}
              <input
                type="checkbox"
                name="gender"
                value="female"
                onChange={setPersonalDetailhandler}
              />
              <span className="tab"></span>D.O.B:{" "}
              <input
                type="date"
                name="dob"
                onChange={setPersonalDetailhandler}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col" colspan="3">
              Dates, itinerary and purpose of trip
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Date of departure:{" "}
              <input
                type="text"
                name="dod"
                onChange={setCountryChangeHandler}
              />
            </td>
            <td colspan="2">
              Return date or overall length:{" "}
              <input
                type="text"
                name="returndate"
                onChange={setCountryChangeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>Countries to be visited</td>
            <td>Length of stay</td>
            <td>Remote?Trek?Medical access?Attitude?</td>
          </tr>
          <tr>
            <th scope="row">
              1{" "}
              <input
                type="text"
                name="country_1"
                onChange={setCountryChangeHandler}
              />
            </th>
            <td>
              <input
                type="text"
                name="country_1_stay"
                onChange={setCountryChangeHandler}
              />{" "}
            </td>
            <td>
              <input
                type="text"
                name="country_1_remote"
                onChange={setCountryChangeHandler}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">
              2{" "}
              <input
                type="text"
                name="country_2"
                onChange={setCountryChangeHandler}
              />
            </th>
            <td>
              <input
                type="text"
                name="country_2_stay"
                onChange={setCountryChangeHandler}
              />{" "}
            </td>
            <td>
              <input
                type="text"
                name="country_2_remote"
                onChange={setCountryChangeHandler}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">
              3{" "}
              <input
                type="text"
                name="country_3"
                onChange={setCountryChangeHandler}
              />
            </th>
            <td>
              <input
                type="text"
                name="country_3_stay"
                onChange={setCountryChangeHandler}
              />{" "}
            </td>
            <td>
              <input
                type="text"
                name="country_3_remote"
                onChange={setCountryChangeHandler}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">
              4{" "}
              <input
                type="text"
                name="country_4"
                onChange={setCountryChangeHandler}
              />
            </th>
            <td>
              <input
                type="text"
                name="country_4_stay"
                onChange={setCountryChangeHandler}
              />{" "}
            </td>
            <td>
              <input
                type="text"
                name="country_4_remote"
                onChange={setCountryChangeHandler}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">
              5{" "}
              <input
                type="text"
                onChange={setCountryChangeHandler}
                name="country_5"
              />
            </th>
            <td>
              <input
                type="text"
                onChange={setCountryChangeHandler}
                name="country_5_stay"
              />
            </td>
            <td>
              Mode of transport:
              <input
                type="text"
                onChange={setCountryChangeHandler}
                name="modeoft"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col" colspan="3">
              Personal Medical History
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tick which of the following applies to you</td>
            <td>Yes</td>
            <td>No</td>
            <td>Details (reconfirmed at each appointment) </td>
          </tr>
          <tr>
            <td>Are you feeling well today?</td>
            <td>
              <input
                type="checkbox"
                value="yes"
                name="feel_well"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="no"
                name="feel_well"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="text"
                name="feel_well_details"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
          </tr>
          <tr>
            <td>Have you had any immunisations in the past 4 weeks? </td>
            <td>
              <input
                type="checkbox"
                value="yes"
                name="immunisation"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="no"
                name="immunisation"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="text"
                name="immunisation_details"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
          </tr>
          <tr>
            <td>Do you have any recent or past medical history of note?</td>
            <td>
              <input
                type="checkbox"
                value="yes"
                name="recent_or_past"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="no"
                name="recent_or_past"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="text"
                name="recent_or_past_details"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
          </tr>
          <tr>
            <td>
              Do you take any current or repeat medicines or are you taking
              halofantrine?{" "}
            </td>
            <td>
              <input
                type="checkbox"
                value="yes"
                name="current_or_repeat"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="no"
                name="current_or_repeat"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="text"
                name="current_or_repeat_details"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
          </tr>
          <tr>
            <td>Do you have any allergies to any medicines, latex or eggs?</td>
            <td>
              <input
                type="checkbox"
                value="yes"
                name="allergies"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="no"
                name="allergies"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="text"
                name="allergies_details"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
          </tr>
          <tr>
            <td>
              Have you had a serious reaction to a vaccine, antimalarial or
              doxycycline before?
            </td>
            <td>
              <input
                type="checkbox"
                value="yes"
                name="reaction"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="no"
                name="reaction"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="text"
                name="reaction_details"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
          </tr>
          <tr>
            <td>
              Do you known if you are hypersensitive to mefloquine or related
              compounds (e.g. quinine, quinidine) or excipients?
            </td>
            <td>
              <input
                type="checkbox"
                value="yes"
                name="hypersensitive"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="no"
                name="hypersensitive"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="text"
                name="hypersensitive_details"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
          </tr>
          <tr>
            <td>Do you or any of your family suffer from epilepsy?</td>
            <td>
              <input
                type="checkbox"
                value="yes"
                name="family_sufffer"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="no"
                name="family_suffer"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="text"
                name="family_suffer_details"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
          </tr>
          <tr>
            <td>Do you have a past history of black water fever? </td>
            <td>
              <input
                type="checkbox"
                value="yes"
                name="past_history"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="no"
                name="past_history"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="text"
                name="past_history_details"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
          </tr>
          <tr>
            <td>Do you have severe impairment of liver function?</td>
            <td>
              <input
                type="checkbox"
                value="yes"
                name="impairment"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="no"
                name="impairment"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="text"
                name="impairment_details"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
          </tr>
          <tr>
            <td>
              Do you suffer from any blood disorders such as thalassemia or
              sickle cell anaemia?
            </td>
            <td>
              <input
                type="checkbox"
                value="yes"
                name="anaemia"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="no"
                name="anaemia"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="text"
                name="anaemia_details"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
          </tr>
          <tr>
            <td>
              Have you recently undergone radiotherapy, chemotherapy, steroids
              treatment?
            </td>
            <td>
              <input
                type="checkbox"
                value="yes"
                name="radiotherapy"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="no"
                name="radiotherapy"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="text"
                name="radiotherapy_details"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
          </tr>
          <tr>
            <td>
              Do you have any history of the following: anxiety, depression,
              heart, lung, spleen, liver, kidney, immunity, blood conditions,
              disorders, diabetes, immunity, HIV-AIDs?
            </td>
            <td>
              <input
                type="checkbox"
                value="yes"
                name="have_any_history"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="checkbox"
                value="no"
                name="have_any_history"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
            <td>
              <input
                type="text"
                name="have_any_history_details"
                onChange={setFeelWellDetailsHandler}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col" colspan="3">
              Vaccination history
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="3">
              Have you had a vaccine, antimalarial or doxycycline before?
              (Please add dates)
            </td>
          </tr>
          <tr>
            <td>
              Dip Tet Polio{" "}
              <input
                type="date"
                onChange={setVaccinationDetailsHandler}
                name="dtp"
              />
            </td>
            <td>
              Typhoid{" "}
              <input
                type="date"
                onChange={setVaccinationDetailsHandler}
                name="typhd"
              />
            </td>
            <td>
              Hepatitis A{" "}
              <input
                type="date"
                onChange={setVaccinationDetailsHandler}
                name="hepA"
              />
            </td>
          </tr>
          <tr>
            <td>
              Hepatitis B{" "}
              <input
                type="date"
                onChange={setVaccinationDetailsHandler}
                name="hepB"
              />
            </td>
            <td>
              Meningitis{" "}
              <input
                type="date"
                onChange={setVaccinationDetailsHandler}
                name="meni"
              />
            </td>
            <td>
              Yellow Fever{" "}
              <input
                type="date"
                onChange={setVaccinationDetailsHandler}
                name="yellowf"
              />
            </td>
          </tr>
          <tr>
            <td>
              Rabies{" "}
              <input
                type="date"
                onChange={setVaccinationDetailsHandler}
                name="rabies"
              />
            </td>
            <td>
              Jap B Encephalitis{" "}
              <input
                type="date"
                onChange={setVaccinationDetailsHandler}
                name="jabB"
              />
            </td>
            <td>
              Influenza{" "}
              <input
                type="date"
                onChange={setVaccinationDetailsHandler}
                name="influ"
              />
            </td>
          </tr>
          <tr>
            <td>
              Shingles{" "}
              <input
                type="date"
                onChange={setVaccinationDetailsHandler}
                name="shingles"
              />
            </td>
            <td>
              Meningitis B{" "}
              <input
                type="date"
                onChange={setVaccinationDetailsHandler}
                name="meniB"
              />
            </td>
            <td>
              Tick Borne Encephalitis{" "}
              <input
                type="date"
                onChange={setVaccinationDetailsHandler}
                name="tickBE"
              />
            </td>
          </tr>
          <tr>
            <td>
              MMR <input type="date" />
            </td>
            <td>
              Chickenpox{" "}
              <input
                type="date"
                onChange={setVaccinationDetailsHandler}
                name="chknpx"
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              Other <input type="text" />
            </td>
            <td colspan="2">
              Malaria Tablets{" "}
              <input
                type="text"
                onChange={setVaccinationDetailsHandler}
                name="malaria"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col" colspan="3">
              Women Only
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tick which of the following applies to you</td>
            <td>Yes</td>
            <td>No</td>
            <td>Details (reconfirmed at each appointment) </td>
          </tr>
          <tr>
            <td>Are you pregnant or planning a pregnancy?</td>
            <td>
              <input
                type="checkbox"
                name="pregnancy"
                value="yes"
                onChange={setWomenInformationHandler}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="pregnancy"
                value="no"
                onChange={setWomenInformationHandler}
              />
            </td>
            <td>
              <input
                type="text"
                name="pregnancy_details"
                onChange={setWomenInformationHandler}
              />
            </td>
          </tr>
          <tr>
            <td>Are you breastfeeding?</td>
            <td>
              <input
                type="checkbox"
                name="breastfeeding"
                value="yes"
                onChange={setWomenInformationHandler}
              />
            </td>
            <td>
              <input
                type="checkbox"
                name="breastfeeding"
                value="no"
                onChange={setWomenInformationHandler}
              />
            </td>
            <td>
              <input
                type="text"
                name="breastfeeding_details"
                onChange={setWomenInformationHandler}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col" colspan="3">
              Please write below any further information which may be relevant
              e.g. medicines, conditions...
            </th>
          </tr>
        </thead>
      </table>
      <h6>FOR OFFICIAL USE</h6>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Vaccine</th>
            <th scope="col">Consultation 1</th>
            <th scope="col">Consultation 2</th>
            <th scope="col">Consultation 3</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dip / Tet / Polio</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Typhoid</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Hepatitis A</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Hepatitis B</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Meningitis</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Rabies</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Cholera</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Rabies</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Yellow Fever</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Other ................</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Other ................</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Malaria Oral Medicine</th>
            <th scope="col">Date</th>
            <th scope="col">Quantity</th>
            <th scope="col">Details</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Atovaquone + Proguanil</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Lariam (mefloquine)</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Doxycycline</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Paludrine (chloroquine + proguanil)</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Chloroquine</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h6 style={{ float: "right" }}>Total Price………………..</h6>
      <br />
      <h6>Additional travel advice:</h6>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>Water and personal hygiene</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>Travellers’ diarrhoea</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>Hepatitis B and HIV</td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>Insect bite prevention</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>Animal bites</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>Accidents</td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>Insurance</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>Air travel</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>Sun and heat protection</td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td colspan="6" style={{ height: "120px" }}>
              Notes:
            </td>
          </tr>
        </tbody>
      </table>
      <button
        type="submit"
        style={{
          width: "100%",
          color: "#000",
          backgroundColor: "#f2f2f2f",
          outline: "none",
          border: "none",
          padding: "10px",
        }}
        onClick={submitFormHandler}
        className="button-primary d-block"
      >
        Submit
      </button>
      <hr style={{ border: "2px solid #111" }} />
      <h6>PATIENT CONSENT</h6>
      <p style={{ textAlign: "justify" }}>
        I have received information on the risks and benefits of the medicines
        recommended and fully understand them. I have also had the opportunity
        to ask questions. I consent to the recommended medicines being given at
        each appointment. Patient / Guardian
        signature....................................../............................................/.......................................
        Date............................. Pharmacist's
        signature.............................................../.........................................../........................................
        Date............................. Do you consent for our pharmacy and/or
        our authorising medical agency to contact you regarding customer
        satisfaction? Yes / No
      </p>
    </div>
  );
}

export default App;

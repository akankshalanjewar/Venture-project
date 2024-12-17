import React from "react";
import { useNavigate } from "react-router";


const IPODetail = () => {
  let navigate = useNavigate();  

  const handleBack = () => {
    navigate("/ipo-list");

  }
  return (
    <div className="iop-detail-page-wrapper">
      <div className="ipo-detail-header">
        <div className="ipo-detail-header">
          <div className="left-section">
            <div className="back-button" >
              <button onClick={() => handleBack()} >&#8592;</button>
            </div>
            <div className="company-details">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Q5FYAlcDiFqKByToqcWGAl7tNE1vDSEbFQ&s"
                alt="ipo logo"
              />
              <div className="company-text">
                <h1>OYO</h1>
                <p>OYO Private Limited</p>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="download-icon">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xkl8tkN7bHOo9HUwrEjTr2Mi4LVVUdF7dw&s"
                alt="Download Icon"
              />
            </div>
            <div className="apply-button">
              <button>Apply now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="ipo-details-container">
        <h3>IPO details</h3>
        <div className="ipo-card">
          <div className="ipo-item">
            <p className="label">Issue size</p>
            <p className="value">₹3,600 - 3,700 Cr.</p>
          </div>
          <div className="ipo-item">
            <p className="label">Price range</p>
            <p className="value">₹100 - 200</p>
          </div>
          <div className="ipo-item">
            <p className="label">Minimum amount</p>
            <p className="value">₹50,000</p>
          </div>
          <div className="ipo-item">
            <p className="label">Lot size</p>
            <p className="value">
              <strong>150 shares/lots</strong>
            </p>
          </div>
          <div className="ipo-item">
            <p className="label">Issue dates</p>
            <p className="value">
              <strong>12 Dec - 15 Dec 22</strong>
            </p>
          </div>
          <div className="ipo-item">
            <p className="label">Listed on</p>
            <p className="value">
              <strong>15 Dec 22</strong>
            </p>
          </div>
          <div className="ipo-item">
            <p className="label">Listed price</p>
            <p className="value">₹150</p>
          </div>
          <div className="ipo-item">
            <p className="label">Listing gains</p>
            <p className="value">
              <span className="gains">₹10</span>{" "}
              <span className="loss">(10.0%)</span>
            </p>
          </div>
        </div>
      </div>

      <div className="ipo-details-container">
        <h3>IPO Timeline</h3>
        <form className="ipo-timeline-container">
          <ul className="ipo-timeline-list">
            <li className="active"><div className="step-info">
              <p className="step-title">Listing date</p>
              <p className="step-date">21 Dec 2023</p>
            </div></li>
            <li><div className="step-info">
              <p className="step-title">Listing date</p>
              <p className="step-date">21 Dec 2023</p>
            </div></li>
            <li><div className="step-info">
              <p className="step-title">Listing date</p>
              <p className="step-date">21 Dec 2023</p>
            </div></li>
            <li><div className="step-info">
              <p className="step-title">Listing date</p>
              <p className="step-date">21 Dec 2023</p>
            </div></li>
            <li><div className="step-info">
              <p className="step-title">Listing date</p>
              <p className="step-date">21 Dec 2023</p>
            </div></li>
            <li><div className="step-info">
              <p className="step-title">Listing date</p>
              <p className="step-date">21 Dec 2023</p>
            </div></li>
            <li><div className="step-info">
              <p className="step-title">Listing date</p>
              <p className="step-date">21 Dec 2023</p>
            </div></li>
          </ul>
        </form>
      </div>
      <div className="ipo-details-container">
        <h3>About the Company</h3>
        <p className="sub-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam accusamus illo consectetur quas odio inventore beatae voluptatum? Quis quidem libero vel quae aspernatur qui? Dignissimos exercitationem in deleniti adipisci? Fugiat maiores omnis dignissimos deleniti. Eveniet velit non reprehenderit, doloremque labore omnis magnam autem amet nemo, dolorem fugiat distinctio vitae culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla itaque dolores aut, illum explicabo, dolor enim nisi dicta, reprehenderit pariatur odit eaque quo voluptate ducimus inventore voluptatem fuga magni consequuntur laborum atque ratione. Aperiam sunt facilis, eaque placeat recusandae voluptatibus eius doloremque odit dolorum asperiores officia nemo praesentium illo. Velit facere, placeat tempore vel, voluptatibus iure dolores nam temporibus quia, cumque alias porro quod. Ducimus perferendis perspiciatis voluptates, saepe autem vel blanditiis maxime! Fugiat hic fuga magnam nihil. Obcaecati itaque odit exercitationem ab quibusdam voluptates reprehenderit blanditiis doloremque eius, amet repellat, dolor culpa aspernatur nobis aut similique et. In, numquam!</p>
      </div>
    </div>
  );
}


export default IPODetail;

import React from "react";

export const IPOLIST = () => {
  return (
    <div className="ipo-table">
      <table>
        <thead>
          <tr>
            <th>Company / Issue date</th>
            <th>Issue size</th>
            <th>Price range</th>
            <th>Min invest/qty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="company">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Q5FYAlcDiFqKByToqcWGAl7tNE1vDSEbFQ&s"
                  alt="ipo logo"
                />
                <div>
                  <h4>IPO NAME</h4>
                  <p className="sub-detail">4th - 7th Oct 2022</p>
                </div>
              </div>
            </td>
            <td><h4>₹3600 Crores</h4></td>
            <td><h4>₹50-60</h4></td>
            <td>
              <h4>₹50,000</h4> 
              <p className="sub-detail">100 Shares/5 Lots</p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="company">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Q5FYAlcDiFqKByToqcWGAl7tNE1vDSEbFQ&s"
                  alt="ipo logo"
                />
                <div>
                  <h4>IPO NAME</h4>
                  <p className="sub-detail">4th - 7th Oct 2022</p>
                </div>
              </div>
            </td>
            <td><h4>₹3600 Crores</h4></td>
            <td><h4>₹50-60</h4></td>
            <td>
              <h4>₹50,000</h4> 
              <p className="sub-detail">100 Shares/5 Lots</p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="company">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Q5FYAlcDiFqKByToqcWGAl7tNE1vDSEbFQ&s"
                  alt="ipo logo"
                />
                <div>
                  <h4>IPO NAME</h4>
                  <p className="sub-detail">4th - 7th Oct 2022</p>
                </div>
              </div>
            </td>
            <td><h4>₹3600 Crores</h4></td>
            <td><h4>₹50-60</h4></td>
            <td>
              <h4>₹50,000</h4> 
              <p className="sub-detail">100 Shares/5 Lots</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

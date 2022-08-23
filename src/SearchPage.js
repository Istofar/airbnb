import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays • 25 August to 30 August • 2 guests </p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this Legacy House of The Edward Kenway"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bthrooms • Wifi • Kitchen • Free Parking • Washing Machine • The JackDaw • AC Outfit"
        star={4.73}
        price="£30 / night"
        total="£117 / night"
      />
      <SearchResult
        img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
        location="Private room in center of London"
        title="Independent luxury studios for lonesome Alpha Males"
        description="1 guest • 1 bedroom • 1 bed • No shared bthrooms • Wifi • Kitchen • Free Parking • Washing Machine • Moisturizers • Lone Ranger"
        star={4.99}
        price="£100 / night"
        total="£299 / night"
      />
      <SearchResult
        img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest • 1 bedroom • 1 bed • 1.5 shared bthrooms • Wifi • Kitchen • Free Parking • Washing Machine • Therapist"
        star={3.51}
        price="£80 / night"
        total="£240 / night"
      />
      <SearchResult
        img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
        location="Private room in center of London"
        title="30 mins to Oxford Street, Excel London"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bthrooms • Wifi • Free Parking • Harry Potter"
        star={4.31}
        price="£50 / night"
        total="£199 / night"
      />
    </div>
  );
}

export default SearchPage;

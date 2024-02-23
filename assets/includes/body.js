const body =`
<div class=" aside-content-parks ">
<div class="aside-main-parks"   >
  <h2>Transportation to Cancun Parks</h2>
  <br>
  <p>Hire private transportation to the most popular <b>parks in Cancun</b> and the Riviera Maya.</p>
  <br>
  <form id="widgetParkForm" action="https://www.cancunshuttles.com/parks/results" method="POST">



    <label for="hotel">Hotel / Resort</label>
    <input type="text" name="hotel" id="hotel" data-id="">
    <div class="park-relative">
    <div class="show-hotelstours show-hotel" ></div>
    </div>
    <label for="park">Park / Attraction</label>
    <input type="text" id="park" name="park" data-id="">
    <div class="park-relative">
    <div class="show-hotelstours show-parks" ></div>
    </div>
    <div class="form-elements-park">

      <div class="park-relative">
        <label for="date">Date transportation</label>
        <input type="text" id="date" name="date" >
        <i class="fas fa-calendar-week" style="position: absolute; top:40%; right: 8px;  color:#777777"></i>
      </div>

     
      <div>
        <label for="passengers">Passengers</label>
        <select id="passengers" name="passengers">
           <option value="1">1 Passenger</option>
           <option value="2" selected="selected">2 Passengers</option>
           <option value="3">3 Passengers</option>
           <option value="4">4 Passengers</option>
           <option value="5">5 Passengers</option>
           <option value="6">6 Passengers</option>
           <option value="7">7 Passengers</option>
           <option value="8">8 Passengers</option>
           <option value="9">9 Passengers</option>
           <option value="10">10 Passengers</option>
           <option value="11">11 Passengers</option>
           <option value="12">12 Passengers</option>
           <option value="13">13 Passengers</option>
           <option value="14">14 Passengers</option>
           <option value="15">15 Passengers</option>
           <option value="16">16 Passengers</option>
         </select>

      </div>


    </div>
    

    <input type="hidden" name="sitioOrigen" id="sitioOrigen">
    <input type="hidden" name="postWidget" id="postWidget" value="false">
    <input type="hidden" name="idaff" id="idaff" value="null">

    <a class="btn-park" id="btn-Parks">FIND TRANSPORTATION</a>
  </form>
</div>

<div class="box-secureguarantees">
  <div class="cards">
    <div>
      <i class="fa fa-cc-visa"></i>
      <i class="fa fa-cc-mastercard"></i>
      <i class="fa fa-cc-amex"></i>
      <i class="fa fa-cc-paypal"></i>
      <i class="fa fa-cc-discover"></i>
      <i class="fa fa-cc-diners-club"></i>
    </div>
    <strong>Multiple forms of payment</strong>
  </div>

</div>
</div>


`

export default body;
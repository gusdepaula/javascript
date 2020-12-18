'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let map, mapEvent;

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, durantion) {
    this.coords = coords; //  [lat, lng]
    this.distance = distance; // in km
    this.durantion = durantion; // in minutes
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, durantion, cadence) {
    super(coords, distance, durantion);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    // min/km 
    this.pace = this.durantion / this.distance;
    return this.pace
  }
}



class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, durantion, elevationGain) {
    super(coords, distance, durantion);
    this.elevationGain = elevationGain;
    // this.type = cycling';
    this.calcSpeed();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.durantion / 60)
    return this.speed
  }
}

// const run1 = new Running([-23.5477908,-46.660879,15], 5.2, 24, 178);
// const cycling1 = new Cycling([-23.5477908,-46.660879,15], 27, 95, 523);
// console.log(run1, cycling1);


///////////////////////////////////////
// APPLICATION ARCHITECTURE
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor(){
    this.workouts = [];
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toogleElevationField);
  }

  _getPosition(){
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      function(){
        alert('Could not get your position');
      });
    }
  }

  _loadMap(position) {
      const {latitude} = position.coords;
      const {longitude} = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
  
      const coords = [latitude, longitude];
  
      this.#map = L.map('map').setView(coords, 13);
      // console.log(map);
  
      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.#map);
          66
          // Handling clicks on this map
          this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toogleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
      const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
      const allPositive = (...inputs) => inputs.every(inp => inp > 0)

      e.preventDefault();

      // Get data from form
      const type = inputType.value;
      const distance = +inputDistance.value;
      const durantion = +inputDuration.value
      const {lat, lng} = this.#mapEvent.latlng;
      let workout;

      // Check if data is valid

      // If workout running, create running object
      if(type === 'running') {
        const cadence = +inputCadence.value;
        // Check if data is valid
        if(!validInputs(distance, durantion, cadence) || !allPositive(distance, durantion, cadence)) {
          return alert('Inputs have to be positive numbers!')
        }

        workout = new Running([lat, lng], distance, durantion, cadence);
      }

      // If workout cycling, create cycling object
      if(type === 'cycling') {
        const elevation = +inputElevation.value;
        // Check if data is valid
        if(!validInputs(distance, durantion, elevation) || !allPositive(distance, durantion)) {
          return alert('Inputs have to be positive numbers!')
        }

        workout = new Cycling([lat, lng], distance, durantion, elevation);
      }

      // add new object to workout array
      this.#workouts.push(workout);
      console.log(workout);
      
      // Render workout on map as marker
      this.renderWorkoutMarker(workout); 

      // Render workout on list
    
      // Hide form + clear input fields 
      inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
  }
  
  renderWorkoutMarker(workout) {
    L.marker(workout.coords)
    .addTo(this.#map)
    .bindPopup(L.popup({
      maxWidth: 250,
      maxHeight: 100,
      autoClose: false,
      closeOnClick: false,
      className: `${workout.type}-popup`,
    }))
    .setPopupContent('workout')
    .openPopup()
  }
}

const app = new App();
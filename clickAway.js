//Click Away Hook Made by Wolfy The Oracle

import { useEffect } from 'react';

export default function useClickAway({ current }, toggleStatus, closeHandler) {
  const clickAwayHandler = ({ target }) => {
    if (toggleStatus && current && !current.contains(target)) {
      closeHandler();
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', clickAwayHandler);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', clickAwayHandler);
    };
  });
}

//USe:
const ref = useRef(null);
useClickAway(ref, toggleStatus, closeHandler);

// We have this reload icon on the top of our nav bar. it gets refetches fresh data when clicked for your current page.
// I needed it to work no matter which page you were on.
// Since all our API calls are made on mounting or updating of a component I needed to make the component actually remount not just rerender.
// So I wrote a function that changes a state in the app component to true or false and passed that state down as a key to my routes component. if you update a key in react the entire component remounts

forceUpdate = () => {
    const {
      resetDefaultStore,
      resetAppStore,
      resetDetailsStore,
      resetLandingStore,
      resetPlanningStore,
    } = this.props;

    resetDefaultStore();
    resetAppStore();
    resetDetailsStore();
    resetLandingStore();
    resetPlanningStore();
    this.setState(({ reload }) => ({ reload: !reload }));
  };

  render() {
    const { reload } = this.state;

    return (
      <div className="App">
        <Header title="Beacon" forceUpdate={this.forceUpdate} />
        <div id="main-container" className="container-fluid">
          <Routes key={reload} />
        </div>
      </div>
    );
  }
}

// the api calls that don't need anything in order to fetch run on componentDidMount or the useEffect version. The other api calls that need a body or params run on componentDidUpdate. So therefore if I don't clear the store it'll think that I already have the data and nothing in componentDidUpdate will run. honestly... I had no idea changing a key remounted a component
// I happened to see someone mention this in stackoverflow after tons of digging


//
// To combat this you can have action creators that you can call to have the object part done for you { type: SET_USER, payload: value }
// An example of what I did at work the other week is
export const ACTIONS = {
  setFocusedInput(payload) {
    return { type: 'SET_FOCUSED_INPUT', payload };
  },
  setStartDate(payload) {
    return { type: 'SET_START_DATE', payload };
  },
  setStartDateError(payload) {
    return { type: 'SET_START_DATE_ERROR', payload };
  },
  setEndDate(payload) {
    return { type: 'SET_END_DATE', payload };
  },
  setEndDateError(payload) {
    return { type: 'SET_END_DATE_ERROR', payload };
  },
  setErrorCount(payload) {
    return { type: 'SET_ERROR_COUNT', payload };
  },
  setOpenTooltip(payload) {
    return { type: 'SET_OPEN_TOOLTIP', payload };
  },
};
// I then use each action as follows

dispatch(setEndDate(newEndDate));

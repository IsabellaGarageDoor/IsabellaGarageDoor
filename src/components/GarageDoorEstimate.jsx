import React, { useState, useEffect, useRef } from 'react';

function GarageDoorEstimate() {
  const [serviceType, setServiceType] = useState('');
  const [springType, setSpringType] = useState('');
  const [springCount, setSpringCount] = useState('');
  const [openerProblem, setOpenerProblem] = useState('');
  const [rollerProblem, setRollerProblem] = useState('');
  const [rollerCount, setRollerCount] = useState('');
  const [cableProblem, setCableProblem] = useState('');
  const [trackProblem, setTrackProblem] = useState('');
  const [showPrice, setShowPrice] = useState(false);
  const [contact, setContact] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [addressError, setAddressError] = useState('');

  const hiddenFormRef = useRef(null);

  useEffect(() => {
    if (serviceType === 'maintenance') {
      setShowPrice(true);
    }
  }, [serviceType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!name) {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!phone && !email) {
      setPhoneError('Phone or Email is required');
      setEmailError('Phone or Email is required');
      isValid = false;
    } else {
      setPhoneError('');
      setEmailError('');
    }

    if (!address) {
      setAddressError('Address is required');
      isValid = false;
    } else {
      setAddressError('');
    }

    if (isValid && hiddenFormRef.current) {
      hiddenFormRef.current.submit();
    }
  };

  const getPriceRange = () => {
    const prices = {
      openerRepair: {
        wallButton: '$120 - $800',
        motorWontMove: '$120 - $800',
        doorWontOpen: '$120 - $800',
        openerLight: '$120 - $250',
        needNewOpener: '$450 - $800'
      },
      rollerReplacement: {
        '1-2': '$125 - $150',
        '10': '$150 - $200',
        '12': '$160 - $220',
        'other': 'return <a href="tel:9895720303" className="phone-link">Call for estimate</a>',
        loudSqueaky: '$120 - $200',
        doorJerky: '$120 - $200',
        visibleWear: '$120 - $220',
        rollersOffTrack: '$120 - $600'
      },
      cableReplacement: {
        frayedBroken: '$150 - $225',
        rustyCorroded: '$150 - $225',
        cableOffDrum: '$120 - $550',
        doorUneven: '$120 - $300'
      },
      trackRepair: {
        bentDamaged: '$150 - $450',
        doorRubbing: '$150 - $450',
        doorOffTrack: '$150 - $800'
      }
    };

    if (serviceType === 'rollerReplacement') {
      const problemPrices = {
        loudSqueaky: [120, 120],
        doorJerky: [120, 140],
        visibleWear: [120, 130],
        rollersOffTrack: [150, 800]
      };

      const countPrices = {
        '1-2': [20, 50],
        '10': [30, 80],
        '12': [40, 90]
      };

      if (rollerCount === 'other') {
        return 'Call for estimate';
      }

      const base = problemPrices[rollerProblem];
      const addon = countPrices[rollerCount];

      if (base && addon) {
        const low = base[0] + addon[0];
        const high = base[1] + addon[1];
        return `$${low} - $${high}`;
      }

      if (!base && addon) return `$${addon[0]} - $${addon[1]}`;
      if (base && !addon) return `$${base[0]} - $${base[1]}`;

      return '';
    }

    if (serviceType === 'brokenSpring') {
      if (springType === 'torsion') {
        if (springCount === '1') return '$350 - $600';
        if (springCount === '2') return '$450 - $700';
        if (springCount === '4') return 'Call for estimate';
      } else if (springType === 'extension') {
        if (springCount === '1' || springCount === '2') return '$300 - $600';
        if (springCount === '4') return 'Call for estimate';
      }
      return 'Call for estimate';
    }

    if (serviceType === 'maintenance') return '$120 - $300';

    return prices[serviceType]?.[springType || openerProblem || rollerProblem || rollerCount || cableProblem || trackProblem] || '';
  };

  return (
    <div className="form-wrapper">
      <style>
        {`
          .form-wrapper { max-width: 800px; margin: 1rem auto; padding: 0rem; background: #fff; border: none; border-radius: 0.75rem; box-shadow: 0 0 10px rgba(0,0.25rem,0.75rem,0.4); font-family: 'Segoe', san-serif; color: #333; }
          .form-group { margin-bottom: 1rem; }
          label { display: block; font-weight: bold; font-family: 'Lora', serif; font-size: 1.25rem; color: #1a334f; margin-bottom: 0.3rem; }
          select, input, textarea { width: 100%; padding: 0.5rem; margin-top: 0.3rem; border: 0.094rem solid #b27d57; border-radius: 0.25rem; box-sizing: border-box; }
          select:focus, input:focus, textarea:focus { border-color: #b27d57; outline: none; box-shadow: 0 0 0 2px rgba(178, 125, 87, 0.1); }
          .btn-brand { background-color: #1a334f; color: white; padding: 10px 15px; border: 0.094rem solid #b27d57; border-radius: 0.75rem; cursor: pointer; font-weight: bold; margin-top: 10px; }
          .btn-brand:hover { background-color: #b27d57; }
          .price-range { font-weight: bold; color: #1a334f; font-size: 1.25rem; }
          .error { color: red; margin-top: 5px; }
          h2 { color: #1a334f; }
        `}
      </style>

           <h1>Garage Door Repair Estimate</h1>

      <div className="form-group">
        <label htmlFor="serviceType">What type of service do you need?</label>
        <select id="serviceType" value={serviceType} onChange={(e) => {
          setServiceType(e.target.value);
          setShowPrice(false);
          setContact(false);
          setSpringType('');
          setSpringCount('');
          setOpenerProblem('');
          setRollerProblem('');
          setRollerCount('');
          setCableProblem('');
          setTrackProblem('');
        }}>
          <option value="">Select a service</option>
          <option value="brokenSpring">Broken Spring Repair</option>
          <option value="openerRepair">Opener Repair/Replacement</option>
          <option value="rollerReplacement">Roller Replacement</option>
          <option value="cableReplacement">Cable Off/Replacement</option>
          <option value="trackRepair">Track Repair</option>
          <option value="maintenance">Maintenance/Inspection</option>
        </select>
      </div>

      {serviceType === 'brokenSpring' && (
        <>
          <div className="form-group">
            <label htmlFor="springType">Type of spring?</label>
            <select id="springType" value={springType} onChange={(e) => {
              setSpringType(e.target.value);
              setShowPrice(false);
              setContact(false);
            }}>
              <option value="">Select a spring type</option>
              <option value="torsion">Torsion</option>
              <option value="extension">Extension</option>
              <option value="other">Other</option>
            </select>
          </div>
          {springType && (
            <div className="form-group">
              <label htmlFor="springCount">How many springs?</label>
              <select id="springCount" value={springCount} onChange={(e) => {
                setSpringCount(e.target.value);
                setShowPrice(true);
                setContact(false);
              }}>
                <option value="">Select a number</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">Other</option>
              </select>
            </div>
          )}
        </>
      )}

      {serviceType === 'openerRepair' && (
        <div className="form-group">
          <label htmlFor="openerProblem">What problem are you having with your opener?</label>
          <select id="openerProblem" value={openerProblem} onChange={(e) => {
            setOpenerProblem(e.target.value);
            setShowPrice(true);
            setContact(false);
          }}>
            <option value="">Select a problem</option>
            <option value="wallButton">Wall button or remote not working</option>
            <option value="motorWontMove">Motor works but won't move door</option>
            <option value="doorWontOpen">Door won't open/close</option>
            <option value="openerLight">Opener light is flashing/blinking</option>
            <option value="needNewOpener">Need new opener</option>
          </select>
        </div>
      )}

      {serviceType === 'rollerReplacement' && (
        <>
          <div className="form-group">
            <label htmlFor="rollerProblem">What problem are you experiencing with your rollers?</label>
            <select id="rollerProblem" value={rollerProblem} onChange={(e) => {
              setRollerProblem(e.target.value);
              setShowPrice(false);
              setContact(false);
            }}>
              <option value="">Select a problem</option>
              <option value="loudSqueaky">Loud or squeaky operation</option>
              <option value="doorJerky">Door is jerky</option>
              <option value="visibleWear">Visible wear/damage</option>
              <option value="rollersOffTrack">Rollers came off the track</option>
            </select>
          </div>
          {rollerProblem && (
            <div className="form-group">
              <label htmlFor="rollerCount">How many rollers does your door need?</label>
              <select id="rollerCount" value={rollerCount} onChange={(e) => {
                setRollerCount(e.target.value);
                setShowPrice(true);
                setContact(false);
              }}>
                <option value="">Select a number</option>
                <option value="1-2">1-2</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="other">Other</option>
              </select>
            </div>
          )}
        </>
      )}

      {serviceType === 'cableReplacement' && (
        <div className="form-group">
          <label htmlFor="cableProblem">What problem are you experiencing with your cables?</label>
          <select id="cableProblem" value={cableProblem} onChange={(e) => {
            setCableProblem(e.target.value);
            setShowPrice(true);
            setContact(false);
          }}>
            <option value="">Select a problem</option>
            <option value="frayedBroken">Frayed or broken</option>
            <option value="rustyCorroded">Rusty or corroded</option>
            <option value="cableOffDrum">Cable came off drum</option>
            <option value="doorUneven">Door is uneven/crooked</option>
          </select>
        </div>
      )}

      {serviceType === 'trackRepair' && (
        <div className="form-group">
          <label htmlFor="trackProblem">What is going on with the track?</label>
          <select id="trackProblem" value={trackProblem} onChange={(e) => {
            setTrackProblem(e.target.value);
            setShowPrice(true);
            setContact(false);
          }}>
            <option value="">Select a problem</option>
            <option value="bentDamaged">Bent/damaged</option>
            <option value="doorRubbing">Door is rubbing track</option>
            <option value="doorOffTrack">Door is off track</option>
          </select>
        </div>
      )}

      {showPrice && (
        <div>
          <p>Estimated Price: <span className="price-range">{getPriceRange()}</span></p>
          <button onClick={() => setContact(true)} className="btn-brand">
            Would you like us to contact you about your repair?
          </button>
        </div>
      )}

      {contact && (
        <>
          <form onSubmit={handleSubmit}>
            <h2>Contact Information</h2>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
              {nameError && <div className="error">{nameError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              {phoneError && <div className="error">{phoneError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              {emailError && <div className="error">{emailError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
              {addressError && <div className="error">{addressError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="details">Details:</label>
              <textarea id="details" rows="4" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn-brand">Submit</button>
          </form>

          {/* Hidden Form for FormSubmit */}
          <form
            action="https://formsubmit.co/isabellagaragedoor@gmail.com"
            method="POST"
            ref={hiddenFormRef}
            style={{ display: 'none' }}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="name" value={name} />
            <input type="hidden" name="phone" value={phone} />
            <input type="hidden" name="email" value={email} />
            <input type="hidden" name="address" value={address} />
            <input type="hidden" name="details" value={details} />
            <input type="hidden" name="serviceType" value={serviceType} />
            <input type="hidden" name="springType" value={springType} />
            <input type="hidden" name="springCount" value={springCount} />
            <input type="hidden" name="openerProblem" value={openerProblem} />
            <input type="hidden" name="rollerProblem" value={rollerProblem} />
            <input type="hidden" name="rollerCount" value={rollerCount} />
            <input type="hidden" name="cableProblem" value={cableProblem} />
            <input type="hidden" name="trackProblem" value={trackProblem} />
            <input type="hidden" name="priceEstimate" value={getPriceRange()} />
          </form>
        </>
      )}
    </div>
  );
}

export default GarageDoorEstimate;

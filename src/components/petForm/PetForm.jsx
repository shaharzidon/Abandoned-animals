import './petForm.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import Axios from 'axios'
import dimonaLogo from './uploads/dimonaLogo.png'


function PetForm() {
  const [imageSelected, setImageSelected] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [placey, setPlacey] = useState("")
  const [sizey, setSizey] = useState("")
  const [colory, setColory] = useState("")
  const [vailenty, setVailenty] = useState("")
  const [problemy, setProblemy] = useState("")
  const [timey, setTimey] = useState("")
  const [exstraDetailsy, setExstraDetailsy] = useState("")
  const [typey, setTypey] = useState("")
  const [phoneNumbery, setPhoneNumbery] = useState("")
  const [emaily, setEmaily] = useState("")
  const [namey, setNamey] = useState("")
  const [submited, setSubmited] = useState(false)

  const state = [{
    place: placey,
    size: sizey,
    color: colory,
    vailent: vailenty,
    problem: problemy,
    time: timey,
    exstraDetails: exstraDetailsy,
    photo: imageUrl,
    type: typey,
    phoneNumber: phoneNumbery,
    email: emaily,
    name: namey
  }]
  const uploadImage = () => {
    const formData = new FormData()
    formData.append('file', imageSelected)
    formData.append('upload_preset', "gizlgebs")

    Axios.post("https://api.cloudinary.com/v1_1/dptzubs72/image/upload", formData)
      .then((response) => setImageUrl(response.data.secure_url))
    console.log("succeed to upload the image");
  }

  const postReport = (report) => {
    Axios.post(`${process.env.REACT_APP_SECRET_NAME_url}/api/animals`, report)
      .then(console.log(report))
  }

  const submit = () => {
    uploadImage()
    setSubmited(true)

  }
  useEffect(() => {
    if (submited !== false) {
      postReport(state)
      alert("הדיווח נשלח")

    }
  })



  return (
    <div className="petForm">
      <Form className='petForm-form'>

        <div className='petForm-form-sections'>
          <div className='dimona-logo'>
            <img className='dimona-logo-img' src={dimonaLogo} alt="Logo" />
          </div>
          <div className='petForm-form-sections-pic1'>
            <div className='petForm-form-sections-sec0'>

            </div>
            <div className='petForm-form-sections-sec0-desc'>
              <h3 dir='rtl' className='petForm-form-sections-sec0-title-desc'>
                טופס זה נועד לדיווח על חיית מחמד שאבדה לנו או שזיהינו משוטטת ברחבי העיר.
              </h3>
            </div>
          </div>
          <div className='petForm-form-sections-sec1'>
            <h2 dir='rtl'>פרטים אישיים</h2>
            <Form.Group dir='rtl' className="mb-3 petForm-form-sections-sec1-group">
              <Form.Label dir='rtl' className='petForm-form-sections-sec1-group-label' >שם מלא:</Form.Label>
              <Form.Control dir='rtl' className='petForm-form-sections-sec1-group-control' type="text" placeholder="" onChange={(e) => setNamey(e.target.value)} />
              <Form.Text dir='rtl' className="text-muted" >
              </Form.Text>
            </Form.Group>

            <Form.Group dir='rtl' className="mb-3 petForm-form-sections-sec1-group" controlId="formBasicEmail">
              <Form.Label dir='rtl' className='petForm-form-sections-sec1-group-label' >דואר אלקטרוני:</Form.Label>
              <Form.Control dir='rtl' className='petForm-form-sections-sec1-group-control' type="email" placeholder="" onChange={(e) => setEmaily(e.target.value)} />
              <Form.Text dir='rtl' className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group dir='rtl' className="mb-3 petForm-form-sections-sec1-group" >
              <Form.Label dir='rtl' className='petForm-form-sections-sec1-group-label' >מספר נייד:</Form.Label>
              <Form.Control dir='rtl' className='petForm-form-sections-sec1-group-control' type="text" placeholder="" onChange={(e) => setPhoneNumbery(e.target.value)} />
              <Form.Text dir='rtl' className="text-muted">
              </Form.Text>
            </Form.Group>
          </div>

          <div className='petForm-form-sections-pic2'>
            <div className='petForm-form-sections-sec2'>
              <h2 dir='rtl'>פרטי בעל החיים</h2>
              <Form.Group dir='rtl' className="mb-3 petForm-form-sections-sec1-group">
                <Form.Label dir='rtl' className='petForm-form-sections-sec1-group-label' >גודל:</Form.Label>
                <Form.Control dir='rtl' className='petForm-form-sections-sec1-group-control' type="text" placeholder="" onChange={(e) => setSizey(e.target.value)} />
                <Form.Text dir='rtl' className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group dir='rtl' className="mb-3 petForm-form-sections-sec1-group" >
                <Form.Label dir='rtl' className='petForm-form-sections-sec1-group-label' >צבע:</Form.Label>
                <Form.Control dir='rtl' className='petForm-form-sections-sec1-group-control' type="text" placeholder="" onChange={(e) => setColory(e.target.value)} />
                <Form.Text dir='rtl' className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group dir='rtl' className="mb-3 petForm-form-sections-sec1-group" >
                <Form.Label dir='rtl' className='petForm-form-sections-sec1-group-label' >תמונה:</Form.Label>
                <Form.Control dir='rtl' className='petForm-form-sections-sec1-group-control' type="file" placeholder="" onChange={(event) => setImageSelected(event.target.files[0])} />
                <Form.Text dir='rtl' className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group dir='rtl' className="mb-3 petForm-form-sections-sec1-group" >
                <Form.Label dir='rtl' className='petForm-form-sections-sec1-group-label' >מיקום:</Form.Label>
                <Form.Control dir='rtl' className='petForm-form-sections-sec1-group-control' type="text" placeholder="" onChange={(e) => setPlacey(e.target.value)} />
                <Form.Text dir='rtl' className="text-muted">
                </Form.Text>
              </Form.Group>

              <h6 dir='rtl'>בעל חיים תוקפני?</h6>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    variant="secondary"
                    inline
                    label="לא"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    onClick={(e) => setVailenty("לא")}

                  />
                  <Form.Check
                    variant="secondary"
                    inline
                    label="כן"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    onClick={(e) => setVailenty("כן")}
                  />
                </div>
              ))}

              <Form.Group dir='rtl' className="mb-3 petForm-form-sections-sec1-group" controlId="formBasicEmail">
                <Form.Label dir='rtl' className='petForm-form-sections-sec1-group-label' >זמן מקרה האבידה:</Form.Label>
                <Form.Control dir='rtl' className='petForm-form-sections-sec1-group-control' type="datetime-local" placeholder="" onChange={(e) => setTimey(e.target.value)} />
                <Form.Text dir='rtl' className="text-muted">
                </Form.Text>
              </Form.Group>

              <h6 dir='rtl'>סוג בעל חיים:</h6>
              <Form.Select className='petForm-form-sections-sec1-select' dir='rtl' aria-label="Default select example" onChange={(e) => setTypey(e.target.value)}>
                <option dir='rtl'>בחר/י...</option>
                <option dir='rtl' value="כלב">כלב</option>
                <option dir='rtl' value="חתול">חתול</option>
                <option dir='rtl' value="ארנב">ארנב</option>
                <option dir='rtl' value="ציפור">ציפור</option>
                <option dir='rtl' value="שרקן">שרקן</option>
                <option dir='rtl' value="אחר">אחר...</option>

              </Form.Select>
            </div>
          </div>
          <div className='petForm-form-sections-sec3'>
            <h2 dir='rtl'>פרטים על המקרה</h2>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label dir='rtl'>דיווח על האבידה:</Form.Label>
              <Form.Control className='petForm-form-sections-sec4-group-control' dir='rtl' as="textarea" rows={3} onChange={(e) => setProblemy(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label dir='rtl'>הערות:</Form.Label>
              <Form.Control className='petForm-form-sections-sec4-group-control' dir='rtl' as="textarea" rows={2} onChange={(e) => setExstraDetailsy(e.target.value)} />
            </Form.Group>

          </div>
          <div className='petForm-form-sections-sec4'>

            <Button className='petForm-form-sections-sec4-btn' dir='rtl' variant="secondary" size="lg" onClick={() => submit()}>דיווח</Button>
          </div>

        </div>
      </Form>
      {/* here footer */}
    </div>
  );
}

export default PetForm;

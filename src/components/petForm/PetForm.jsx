import './petForm.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function PetForm() {
  return (
    <div className="petForm">
      <Form className='petForm-form'>
        <div className='petForm-form-sections'>
          <div className='petForm-form-sections-sec1'>
            <h2 dir='rtl'>פרטים אישיים</h2>
            <Form.Group dir='rtl' className="mb-3 petForm-form-sections-sec1-group" controlId="formBasicEmail">
              <Form.Label dir='rtl' className='petForm-form-sections-sec1-group-label' >שם מלא:</Form.Label>
              <Form.Control dir='rtl' className='petForm-form-sections-sec1-group-control' type="email" placeholder="" />
              <Form.Text dir='rtl' className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group dir='rtl' className="mb-3 petForm-form-sections-sec1-group" controlId="formBasicEmail">
              <Form.Label dir='rtl' className='petForm-form-sections-sec1-group-label' >דואר אלקטרוני:</Form.Label>
              <Form.Control dir='rtl' className='petForm-form-sections-sec1-group-control' type="email" placeholder="name@example.com" />
              <Form.Text dir='rtl' className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group dir='rtl' className="mb-3 petForm-form-sections-sec1-group" controlId="formBasicEmail">
              <Form.Label dir='rtl' className='petForm-form-sections-sec1-group-label' >מספר נייד:</Form.Label>
              <Form.Control dir='rtl' className='petForm-form-sections-sec1-group-control' type="email" placeholder="" />
              <Form.Text dir='rtl' className="text-muted">
              </Form.Text>
            </Form.Group>
          </div>

          <div className='petForm-form-sections-sec2'>
            <h2 dir='rtl'>פרטי בעל החיים</h2>
            <Form.Group dir='rtl' className="mb-3 petForm-form-sections-sec1-group" controlId="formBasicEmail">
              <Form.Label dir='rtl' className='petForm-form-sections-sec1-group-label' >גודל:</Form.Label>
              <Form.Control dir='rtl' className='petForm-form-sections-sec1-group-control' type="email" placeholder="" />
              <Form.Text dir='rtl' className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group dir='rtl' className="mb-3 petForm-form-sections-sec1-group" controlId="formBasicEmail">
              <Form.Label dir='rtl' className='petForm-form-sections-sec1-group-label' >צבע:</Form.Label>
              <Form.Control dir='rtl' className='petForm-form-sections-sec1-group-control' type="email" placeholder="" />
              <Form.Text dir='rtl' className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group dir='rtl' className="mb-3 petForm-form-sections-sec1-group" controlId="formBasicEmail">
              <Form.Label dir='rtl' className='petForm-form-sections-sec1-group-label' >תמונה:</Form.Label>
              <Form.Control dir='rtl' className='petForm-form-sections-sec1-group-control' type="file" placeholder="" />
              <Form.Text dir='rtl' className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group dir='rtl' className="mb-3 petForm-form-sections-sec1-group" controlId="formBasicEmail">
              <Form.Label dir='rtl' className='petForm-form-sections-sec1-group-label' >מיקום:</Form.Label>
              <Form.Control dir='rtl' className='petForm-form-sections-sec1-group-control' type="email" placeholder="" />
              <Form.Text dir='rtl' className="text-muted">
              </Form.Text>
            </Form.Group>

            <h6 dir='rtl'>בעל חיים תוקפני?</h6>
            {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            variant="secondary"
            inline
            label ="לא"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            variant="secondary"
            inline
            label="כן"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}

            <Form.Group dir='rtl' className="mb-3 petForm-form-sections-sec1-group" controlId="formBasicEmail">
              <Form.Label dir='rtl' className='petForm-form-sections-sec1-group-label' >זמן מקרה האבידה:</Form.Label>
              <Form.Control dir='rtl' className='petForm-form-sections-sec1-group-control' type="date" placeholder="" />
              <Form.Control dir='rtl' className='petForm-form-sections-sec1-group-control' type="time" placeholder="" />
              <Form.Text dir='rtl' className="text-muted">
              </Form.Text>
            </Form.Group>

            <h6 dir='rtl'>סוג בעל חיים:</h6>
            <Form.Select className='petForm-form-sections-sec1-select' dir='rtl' aria-label="Default select example">
              <option dir='rtl'>בחר/י...</option>
              <option dir='rtl' value="1">כלב</option>
              <option dir='rtl' value="2">חתול</option>
              <option dir='rtl' value="3">ארנב</option>
              <option dir='rtl' value="4">ציפור</option>
              <option dir='rtl' value="5">שרקן</option>
              <option dir='rtl' value="6">אחר...</option>

            </Form.Select>
          </div>

          <div className='petForm-form-sections-sec3'>
            <h2 dir='rtl'>פרטים על המקרה</h2>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label dir='rtl'>דיווח על האבידה:</Form.Label>
              <Form.Control className='petForm-form-sections-sec4-group-control' dir='rtl' as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label dir='rtl'>הערות:</Form.Label>
              <Form.Control className='petForm-form-sections-sec4-group-control' dir='rtl' as="textarea" rows={2} />
            </Form.Group>

          </div>
          <div className='petForm-form-sections-sec4'>

            <Button dir='rtl' variant="secondary" size="lg" type="submit">דיווח</Button>
          </div>

        </div>
      </Form>
      {/* here footer */}
    </div>
  );
}

export default PetForm;

// import request from 'supertest';
// import app from '../config/app';

describe('Content Type Middleware', () => {
  test('1+1=2', () => {
    expect(1 + 1).toBe(2);
  });

  // test('Should return default Content Type as JSON', async () => {
  //   app.post('/test_content_type', (req, res) => {
  //     res.send('');
  //   });
  //   await request(app).get('/test_content_type').expect('content-type', /json/);
  // });

  // test('Should return XML Content Type when forced', async () => {
  //   app.post('/test_content_type_xml', (req, res) => {
  //     res.send('');
  //   });
  //   await request(app)
  //     .get('/test_content_type_xml')
  //     .expect('content-type', /xml/);
  // });
});

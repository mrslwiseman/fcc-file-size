# API: File Metadata Microservice
### Node.js | Express | Formidable
---

Part of a series of Free Code Camp Backend / API projects.  
This API allows user to upload a file and then returns the file size in JSON format.  

### User Story
- I can submit a FormData object that includes a file upload.
- When I submit something, I will receive the file size in bytes within the JSON response

---
### Example Usage
Via Browser:  
Use the form to upload your file.

    ...herokuapp.com/ 

Via fetch / postman  

    Method: POST
    Headers: { Content-Type: multipart/form-data}  
    ...herokuapp.com/

### Example Response 
Returns a JSON object with 'size' in bytes.

    {  
    "size": 1996815
    }



### Takeaways
- I usually try and avoid bloating projects wherever possible by popping those sweet npm install pills, and experiemented with reading the buffer directly, but soon gave up.
- I could get a byteLength of the data, but it included the headers / multipart form dividers etc, so I implemented the formidable module which has very comprehensive parsing from looking at source.
- Learnt some things about the node fs module, streams, buffers, encoding types...
- Used Formidable for the first time, is a well proven module, with NO DEPENDENCIES. Yay.

    const server = http.createServer((req, res) => {
    req.on('data', (chunk) => {
        size += Buffer.byteLength(chunk)
    })

### Todo
- Learn more about node fs / streams.
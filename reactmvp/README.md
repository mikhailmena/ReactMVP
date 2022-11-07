
## API Reference

#### Get all items

```http
  GET /api/items
  //POST//////
app.post('/push', (req, res) => {
    try {
        pool.query('INSERT INTO jobprospects (jobtitle,jobdescription, POC) VALUES ($1,$2,$3) RETURNING *;', 
        [req.body.jobtitle, req.body.jobdescription, req.body.poc])
        .then((result) => {
            res.status(200, "push working");
            res.send(result.rows);

        }); 
    } catch (error) {
        console.error(error)
    }
    
})
//DELETE/////
app.delete('/delete:id', (req, res) => {
    try{
        pool.query('DELETE FROM jobprospects WHERE id = ($1);', [req.params.id])
        .then((result) => {
            res.status(300 , "row deleted");
            res.send(result.rows)
        })
    }catch (error) {
        console.error(error)
    }
    })
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


I used Bootstrap, Express.js, nodemon, Docker, and React
Npm install, nodemon, and npm start required to run project
Found a lot of difficulties with delete function.
Learned a lot
const handler = (req, res) => {
    console.log(req.body, req.method, "Request")
    if(req.method  == 'POST') {
        const { username, password } = req.body;
        if(username === "Kanishk17" && password == "1234") {
            return res.status(200).json({
                message: "Logged in :)"
            })
        } else {
            return res.status(201).json({
                message: "either password or username is incorrect...!!!!!"
            })
        }
    }
    
}

export default handler;
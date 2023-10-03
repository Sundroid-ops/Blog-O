
app.use(session({secret : "gogogaga"}))
app.use(flash())
app.use("/user",login);
app.use("/BlogO",event);
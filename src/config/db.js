mongoose.Promise = global.Promise;

try {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (err) {
  throw err;
}

mongoose.connection.on("connected", () => {
  console.log(`connected to database ${process.env.DB_URL}`);
});

//to remove mongoose depreciation warnings
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

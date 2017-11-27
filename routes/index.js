const express = require('express'),
    path = require('path'),
    router = express.Router();

router.get('/', (req, res, next)=>{
    res.render('index');
});

router.get('/download/chrome.exe', (req, res, next)=>{
    res.sendFile(path.resolve(__dirname, '../ChromeStandaloneSetup.exe'));
});

module.exports = router;
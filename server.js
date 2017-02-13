var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne= {
    title: 'ArticleOne | Preetigr',
    heading: 'My Article..',
    content: ` <p>
                        hi!!
                        </p>
                        <li>
                            abot myself
                        </li>
                        <ol>
                            I love travelling..
                        </ol>`
    
};

function createTemplate(data) {
    var title= data.title;
    var heading= data.heading;
    var content= data.content;
var htmlTemplate= `<html>
            <head>
                <title>
                    ${title}
                </title>
                <link href="/ui/style.css" rel="stylesheet" />
                
            </head>
            <body>
               <div class="container" >
                <div>
                    <h1>
                       ${heading}
                    </h1>
                    <div>
                    ${content}
                    </div>
                </div>
                </div>
            </body>
          </html>
`;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/article-one', function(req, res){
    res.sendFile(path.join(__dirname, 'ui','article-one.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

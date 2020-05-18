
USE sdz9w1lbrjjeliul;

-- Javascript
INSERT INTO Definitions (topic, definition, example, language)
VALUES ('Javascript', 'A programming language used to make a site more interactable.', '', 'Javascript');

INSERT INTO Definitions (topic, definition, example, language)
VALUES ('Variables','Stores data values that can be used to add dynanicism to the application. Variables should have unique names that define the data that it holds.','var score = 0','Javascript');

INSERT INTO Definitions (topic, definition, example, language)
VALUES ('Functions','A set of statements that performs tasks or calculates a value','function numbers(num){ return num* num}','JavaScript');

INSERT INTO Definitions (topic, definition, example, language)
VALUES ('Objects','A collection of named values.','car = {make:"Hyundai", model:"Sonata", color:"orange", year: 2014}','JavaScript');

INSERT INTO Definitions (topic, definition, example, language)
VALUES ('Properties', 'The values connected to an object.', 'car.model','javaScript');

--HTML
INSERT INTO Definitions (topic, definition, example, language)
VALUES ('HTML', 'Hyper Text Markup Language is for creating a webpage. HTML includes writing, links, pictures, sound, and even video', '<!DOCTYPE html>
<html lang="en">
  <head></head><body></body></html>', 'HTML');

INSERT INTO Definitions (topic, definition, example, language)
VALUES ('Tags', 'Hidden keywords within a web page that define how the web browser formats and displays the content. Most tags must have two parts, an opening and a closing part.', '<body> </body>', 'HTML');

INSERT INTO Definitions (topic, definition, example, language)
VALUES ('Element', 'the content of a start and end tag and everything in between', '<body> Hello World </body>', 'HTML');

INSERT INTO Definitions (topic, definition, example, language)
VALUES ('Attributes', 'Provide additional information about an element and are specified in the start tag', '<img src= "happy_cat.gif">, <a href="https://cats.com</a>', 'HTML');

INSERT INTO Definitions (topic, definition, example, language)
VALUES ('Links', 'HTML links are known as Hyperlinks and direct the user to other web addresses or pages within the same URL.', '<a href="url">link text</a>','HTML');

--CSS
INSERT INTO Definitions(topic, definition, example, language)
VALUES ('CSS','cascading style sheet which describes how HTML elements are displayed on screen','body {background-color: white;}','CSS');

INSERT INTO Definitions(topic, definition, example, language)
VALUES ('CSS Syntax','consists of a selector and a delcaration block','Selector = h1, declaration = color:blue; font-size: 16px; alltogether = h1{color:blue; font-size: 16px;}','CSS');

INSERT INTO Definitions(topic, definition, example, language)
VALUES ('Styles','effect design, layout, variations, animation and screen dimensions','{max-width: 900px; border-shadow: 6px;}','CSS');

INSERT INTO Definitions(topic, definition, example, language)
VALUES ('Property','the specific style being altered for a selector','h1{font-size: 14px;}, here font-size is the property','CSS');

INSERT INTO Definitions(topic, definition, example, language)
VALUES ('Property value','what the specific style being altered is going to be','h1{font-size: 14px;}, 14px is the property value','CSS');

INSERT INTO Definitions(topic, definition, example, language)
VALUES ('Selectors','There are several categories of different selectors used to find the HTML elements to style: simple, combinator, pseudo-class, pseudo-elements selectors, and attribute selectors','simple: elements based on name, id, and class; combinator: elements based on a specific relationship between them; pseudo-class: elements based on a certain state; pseudo-elements: select and style part of an element; attribute: elements based on an attribute or attribute value','CSS');

INSERT INTO Definitions(topic, definition, example, language)
VALUES ('Inserting CSS', 'Three ways to add CSS to an HTML page: external: a link to a .css file, internal: css inside of <style></style> tags in the HTML file and inline: inside the HTML tag with a style attribute', '<link rel="stylesheet href="style.css> , <style> *{ background-color: black;}, or <h1 style="font-size: 12px;">Hello</h1>', 'CSS')
import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>1. What is Context API? OR What is the purpose of Context API?</h1>
            <h3>Answer: The Context API is a React structure that enables you to exchange unique details. It assists in solving prop-drilling from all levels of my application... React.createContext() is all my need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components. Consumer as it so happens is a component which consumes and uses the state.</h3>
            <br />
            <br />
            <h1>What is semantic tag? Give some example</h1>
            <h3>Answer: A semantic tag clearly describes its meaning to both the browser and the developer. Examples of non-semantic elements: div and span - Tells nothing about its content. Examples of semantic elements: form , table , and article - Clearly defines its content. Elements such as header, nav, section, article, aside, and footer act more or less like div elements. They group other elements together into page sections. However where a div tag could contain any type of information, it is easy to identify what sort of information would go in a semantic header region.</h3>
        </div>
    );
};

export default Blogs;
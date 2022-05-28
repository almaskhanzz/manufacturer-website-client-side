import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:mx-20 mx-4 bg-base-200 shadow-2xl'>
            <div className='lg:px-10 lg:py-6'>
                <h2>Question and Answers</h2>
                <div>
                    <p>1. How will you improve the performance of a React Application?</p>
                    <p>Ans: Keeping component state local where necessary.
                        Memoizing React components to prevent unnecessary re-renders.
                        Code-splitting in React using dynamic import()
                        Windowing or list virtualization in React.
                        Lazy loading images in React. </p>
                    <p>2. What are the different ways to manage a state in a React application?</p>
                    <p>Ans: Managing state is arguably the hardest part of any application. It's why there are so many state management libraries available and more coming around every day (and even some built on top of others... There are hundreds of "easier redux" abstractions on npm). Despite the fact that state management is a hard problem, I would suggest that one of the things that makes it so difficult is that we often over-engineer our solution to the problem.</p>
                    <p>3. How does prototypical inheritance work?</p>
                    <p>Ans. JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).</p>
                    <p>4. What is a unit test? Why should write unit tests?</p>
                    <p>Ans: One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.</p>
                    <p>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
                    <p>Ans: First I will create a state then useEffect. after that by mapping the products array I will get the products individual value.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
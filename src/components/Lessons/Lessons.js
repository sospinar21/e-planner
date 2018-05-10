import React, { Component } from 'react'
import './Lessons.css'
import AddLessons from '../AddLessons/AddLessons'
import Iframe from 'react-iframe'

class Lessons extends Component {
  constructor() {
    super()
    this.state = {
      urlInput: ''
    }
  }

  showInput = (input) => {
    this.setState({
      urlInput: input
    })
  }


render() {
  return (
    <div className='lessons'>
    <section class="content">
            <h1>
              Binary Search Tree
            </h1>
          <h3 id="goals">Goals</h3>

<p>By the end of this lesson, you will:</p>

<ul>
  <li>Understand the general concept of a binary search tree</li>
  <li>Be familiar with why binary search trees are used and what purpose they serve</li>
  <li>Know how to interact with a tree the following ways:
    <ul>
      <li>Inserting Values</li>
      <li>Findind A Value</li>
      <li>Depth First vs Breadth First Search</li>
    </ul>
  </li>
</ul>

<h2 id="vocab">Vocab</h2>

<ul>
  <li><code class="highlighter-rouge">Data Structure</code> A way of structuring data, usually so that it can be used by an algorithm</li>
  <li><code class="highlighter-rouge">Algorithm</code> A set of rules and processes for solving a problem</li>
</ul>

<h2 id="data-structures">Data Structures</h2>

<p>A common theme in computer programming is deciding how to store and organize data within an application. The particular approach used to organize the data is called a “data structure”. These can come in many shapes and sizes - think an array, or an object. They can also come in more complex forms like a stack, linked list, or in today’s case, a binary search tree.</p>

<h2 id="definition-what-is-a-binary-search-tree">Definition: What Is a Binary Search Tree</h2>

<p>A Binary Search Tree (BST from here on out) is a method of organizing data in a series of connected, sorted nodes. This type of structure is particularly good at inserting, finding, and moving around data in an effecient, cheap way.</p>

<p>Let’s take a look at what a small BST might look like:</p>

<div class="language-js highlighter-rouge"><div class="highlight"><pre class="highlight"><code>        <span class="mi">10</span>
      <span class="o">/</span>    <span class="o">\</span>
    <span class="mi">5</span>        <span class="mi">12</span>
  <span class="o">/</span>   <span class="err">\</span>         <span class="o">\</span>
<span class="mi">3</span>       <span class="mi">7</span>         <span class="mi">19</span>
       <span class="o">/</span>
    <span class="mi">6</span>
</code></pre></div></div>

<h2 id="dig-deeper-why-use-a-bst">Dig Deeper: Why Use A BST?</h2>
<p>Before we continue to look at this structure, let’s talk about what we mean by “cheap”. Think about what an array looks like:</p>

<div class="language-js highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kd">let</span> <span class="nx">x</span> <span class="o">=</span> <span class="p">[</span><span class="mi">2</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">7</span><span class="p">];</span>
</code></pre></div></div>

<p>This data structure works really well if you need to set aside space for memory once, and then access it many times. But what if you need to modify this array, for example by adding the number 3 in the correct spot?</p>

<div class="language-js highlighter-rouge"><div class="highlight"><pre class="highlight"><code>  <span class="kd">let</span> <span class="nx">x</span> <span class="o">=</span> <span class="p">[</span><span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">7</span><span class="p">];</span>
</code></pre></div></div>

<p>We won’t go into the details too much, but because all of the data in this array is stored in the same location in memory, it ultimately means that you have to rewrite the entire array which will then take up a bigger chunk of data. What if you wanted to add 1,000,000 randomly generated values? You’d need a large chunk of memory to store such a big collection of numbers and continuously rewrite that entire array of data.</p>

<p>A BST, on the other hand, is structured with a series of <code class="highlighter-rouge">nodes</code>. Each node is an independent piece of data, with its own location in memory. This means that however many nodes there are, each one can have its own address without affecting the entire data structure.</p>

<h2 id="bst-rules">BST Rules</h2>
<p>There are a few main rules:</p>

<ol>
  <li>Each BST has a root node (<code class="highlighter-rouge">10</code> in our example above), which contains data and has no parent nodes.</li>
  <li>Each node has zero to two (<code class="highlighter-rouge">two</code> hence the keyword <code class="highlighter-rouge">binary</code> in this title) child nodes.</li>
  <li>Each child node linked to the left (<code class="highlighter-rouge">5</code>) has a data value less than or equal to the parent node.</li>
  <li>Each child node linked to the right (<code class="highlighter-rouge">12</code>) has a data value greater than the parent node.</li>
</ol>

<p>What’s sweet about this structure is that if an algorithm is trying to insert or find a particular node in the tree, you can automatically rule out large chunks of data just by knowing the value of a few nodes.  Let’s look at some examples.</p>

<h2 id="building-a-binary-search-tree-insertion">Building A Binary Search Tree (Insertion)</h2>

<p>Let’s say we want to store the following list of numbers in a BST: [10, 5, 12, 7, 3, 19, 6]. Let’s also imagine that we have a function, <code class="highlighter-rouge">insert(node)</code> that adds these nodes into our tree.</p>

<p>The first value in our list is <code class="highlighter-rouge">10</code>. Since it is the first value loaded into our tree, <code class="highlighter-rouge">10</code> is now our <code class="highlighter-rouge">root node</code>.</p>

<p><code class="highlighter-rouge">insert(10)</code></p>

<div class="language-js highlighter-rouge"><div class="highlight"><pre class="highlight"><code>        <span class="mi">10</span>
</code></pre></div></div>

<p>The next number in our list is <code class="highlighter-rouge">5</code>. We call <code class="highlighter-rouge">insert(5)</code>, 5 is less than 10 so it checks for any additional nodes to the <em>left</em> of <code class="highlighter-rouge">10</code>. It finds none, and is inserted as a child node to the <em>left</em> of our root node of <code class="highlighter-rouge">10</code>.</p>

<div class="language-js highlighter-rouge"><div class="highlight"><pre class="highlight"><code>        <span class="mi">10</span>
      <span class="o">/</span>
    <span class="mi">5</span>
</code></pre></div></div>

<p>The next number in our list is <code class="highlighter-rouge">12</code>. We call <code class="highlighter-rouge">insert(12)</code>, 12 is more than 10 so it checks for any additonal nodes to <em>right</em> of <code class="highlighter-rouge">10</code>, finds none, and is inserted there as a child node.</p>

<div class="language-js highlighter-rouge"><div class="highlight"><pre class="highlight"><code>        <span class="mi">10</span>
      <span class="o">/</span>    <span class="o">\</span>
    <span class="mi">5</span>        <span class="mi">12</span>
</code></pre></div></div>

<p>Next we have <code class="highlighter-rouge">7</code>. This is where things get crazy. When we call <code class="highlighter-rouge">insert(7)</code>, we start at our root node of <code class="highlighter-rouge">10</code>. <code class="highlighter-rouge">7</code> is less than <code class="highlighter-rouge">10</code> so it moves to the left side of the tree and can now completely ignore the entire right side of our tree. The next value it hits is <code class="highlighter-rouge">5</code>. <code class="highlighter-rouge">5</code> is less than <code class="highlighter-rouge">7</code>, so it moves to the right of the node with a value of <code class="highlighter-rouge">5</code>. There are no more nodes to check, so that’s where it stops.</p>

<div class="language-js highlighter-rouge"><div class="highlight"><pre class="highlight"><code>        <span class="mi">10</span>
      <span class="o">/</span>    <span class="o">\</span>
    <span class="mi">5</span>        <span class="mi">12</span>
      <span class="o">\</span>
        <span class="mi">7</span>
</code></pre></div></div>

<p>Let’s keep going:</p>

<p><code class="highlighter-rouge">insert(3)</code></p>

<div class="language-js highlighter-rouge"><div class="highlight"><pre class="highlight"><code>        <span class="mi">10</span>
      <span class="o">/</span>    <span class="o">\</span>
    <span class="mi">5</span>        <span class="mi">12</span>
  <span class="o">/</span>   <span class="o">\</span>
<span class="mi">3</span>       <span class="mi">7</span>
</code></pre></div></div>

<p><code class="highlighter-rouge">insert(19)</code></p>

<div class="language-js highlighter-rouge"><div class="highlight"><pre class="highlight"><code>        <span class="mi">10</span>
      <span class="o">/</span>    <span class="o">\</span>
    <span class="mi">5</span>        <span class="mi">12</span>
  <span class="o">/</span>   <span class="err">\</span>         <span class="o">\</span>
<span class="mi">3</span>       <span class="mi">7</span>         <span class="mi">19</span>
</code></pre></div></div>

<p>And last, but  not least, <code class="highlighter-rouge">insert(6)</code>. This node is less than <code class="highlighter-rouge">10</code>, so we move left. There is already a child node (<code class="highlighter-rouge">5</code>) so we compare <code class="highlighter-rouge">5</code> to <code class="highlighter-rouge">6</code>, <code class="highlighter-rouge">6</code> is greater than <code class="highlighter-rouge">5</code> so we move down to the right child node. A right child node already exists (<code class="highlighter-rouge">7</code>) so we compare the two. <code class="highlighter-rouge">7</code> is greater than <code class="highlighter-rouge">6</code>, so we move to the left child node of <code class="highlighter-rouge">7</code>. There is no left child node so this is where <code class="highlighter-rouge">6</code> will land. Our final tree looks like this:</p>

<div class="language-js highlighter-rouge"><div class="highlight"><pre class="highlight"><code>        <span class="mi">10</span>
      <span class="o">/</span>    <span class="o">\</span>
    <span class="mi">5</span>        <span class="mi">12</span>
  <span class="o">/</span>   <span class="err">\</span>         <span class="o">\</span>
<span class="mi">3</span>       <span class="mi">7</span>         <span class="mi">19</span>
       <span class="o">/</span>
      <span class="mi">6</span>
</code></pre></div></div>
</section>
</div>
  )
}

}



export default Lessons 
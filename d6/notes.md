# Leslie Matrices and Population Dynamics

Here's a thing, consider the following problem, very much inspired by the Advent of Code problem of
Day 6 2021. We have some animal, say a fish and we know they behave in a way such that we can 
describe how the population changes. We imagine that the fish double in population every three days and when 
the fish reproduces it dies, ie. the fish dies at day 3. We can represent these are a list of numbers, 
we consider if we just have one fish, `1`, then we can run through the days and see how this behaves, 
`1` on Day 1, then `2` on Day 2, then `3, 1` on Day 3, then the first fish dies and then we return to `1`.
So, this is not very interesting, the population is just stable. However, let's try and represent this behaviour 
in a matrix. I don't quite know how to represent this, but we shall try. We shall consider a vector,
$$ \begin{matrix} a \\ b \\ c \end{matrix} $$
as a matrix where we have $a$ in life cycle 1, then $b$ in life cycle 2 and $c$ in life cycle 3. We can, using this
find a suitable matrix to explain the dynamics. Where we can notice these are our values as we multiply our column 
into the matrix and remember that we are interested in the fish going into the next life cycle, or more specifically, 
$$ \begin{matrix} a & * & * \\ b & * & * \\ c & * & * \end{matrix} \begin{matrix} 1 \\ 0 \\ 0 \end{matrix} = \begin{matrix} 0 \\ 1 \\ 0 \end{matrix}$$
We can solve this and find we have some values we can't uniquely determine and so we let $a = c = 0$ and then we can deduce that $b = 1$. 
Now we work further and use similar ideas and find that we have a matrix of:
$$ \begin{matrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{matrix} $$
This was just a very specific case, we consider some other intial pool of fish. Let us go down to the bottom of
our garden and look at our fish. Our fish has population dynamics similar to the ones we defined above, so then
we count the number of fish in the pond and we find that there are $f_1$ in stage 1, then $f_2$ in stage 2 and $f_3$
in stage 3. 
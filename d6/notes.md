# Leslie Matrices and Population Dynamics

Here's a thing, consider the following problem, very much inspired by the Advent of Code problem of Day 6 2021. We have some animal, say a fish and we know they behave in a way such that we can describe how the population changes. We imagine that the fish double in population every three days and when the fish reproduces it dies, i.e. the fish dies at day 3. We can represent these are a list of numbers, we consider if we just have one fish, `1`, then we can run through the days and see how this behaves, `1` on Day 1, then `2` on Day 2, then `3, 1` on Day 3, then the first fish dies and then we return to `1`.
So, this is not very interesting, the population is just stable. However, let's try and represent this behaviour in a matrix. I don't quite know how to represent this, but we shall try. We shall consider a vector,
$$ \begin{matrix} a \\ b \\ c \end{matrix} $$
as a matrix where we have $a$ in life cycle 1, then $b$ in life cycle 2 and $c$ in life cycle 3. We can, using this find a suitable matrix to explain the dynamics. Where we can notice these are our values as we multiply our column into the matrix and remember that we are interested in the fish going into the next life cycle, or more specifically,
$$ \begin{matrix} a & * & * \\ b & * & * \\ c & * & * \end{matrix} \begin{matrix} 1 \\ 0 \\ 0 \end{matrix} = \begin{matrix} 0 \\ 1 \\ 0 \end{matrix}$$
We can solve this and find we have some values we can't uniquely determine and so we let $a = c = 0$ and then we can deduce that $b = 1$. Now we work further and use similar ideas and find that we have a matrix of:
$$ \begin{matrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{matrix} $$
This was just a very specific case, we consider some other initial pool of fish. Let us go down to the bottom of our garden and look at our fish. Our fish has population dynamics similar to the ones we defined above, so then we count the number of fish in the pond and we find that there are $f_1$ in stage 1, then $f_2$ in stage 2 and $f_3$
in stage 3. Do some quick matrix multiplication,
$$
\begin{align*}
  \begin{matrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{matrix} \begin{matrix} f_1 \\ f_2 \\ f_3 \end{matrix} &= \begin{matrix} f_3 \\ f_1 \\ f_2 \end{matrix} \\
  \begin{matrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{matrix} \begin{matrix} f_3 \\ f_1 \\ f_2 \end{matrix} &= \begin{matrix} f_2 \\ f_3 \\ f_1 \end{matrix} \\
  \begin{matrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{matrix} \begin{matrix} f_2 \\ f_3 \\ f_1 \end{matrix} &= \begin{matrix} f_1 \\ f_2 \\ f_3 \end{matrix} \\
\end{align*}
$$
and this is exactly what we expect from our population model, run the steps we outlined above and you should reach a similar periodic behaviour.

## What is a Leslie* Matrix?
When we describe populations we usually have several factors that we are interested in describing. Note the asterisk, I am briefing over quite a few details here. There are two different mains part to our model; the fertility rate, so when does each life cycle produce offspring and at what rate and the survival rates, how many survive between the life stages. If we denote the fertility rate, sometimes denoted fecundity, as $F_0$, $F_1$ and $F_2$ and similarly the survival rate $S_0$ and $S_1$. Then in a similar way as before we can write our Leslie matrix as,
$$ L = \begin{matrix} F_0 & F_1 & F_2 \\ S_0 & 0 & 0 \\ 0 & S_1 & 0 \end{matrix} $$
NB! There are only two survival rates as we consider the transition between survival rates. This Leslie matrix, can now be used to talk about the dynamics over time by putting this matrix into a different equation:
$$ x_{n+1} = Lx_n $$

## Solving the system
It now suffices to solve this system and we can do this by nicely considering the first few terms then
$$ x_1 = Lx_0 \qquad x_2 = L^2x_0 \qquad x_3 = L^3x_0 \qquad \dots \qquad x_n = L^nx_0 $$
and so we see that we can solve this by just finding the $n^{th}$ power of a matrix and then multiplying by some initial condition.
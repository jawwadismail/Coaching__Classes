import numpy as np
from matplotlib import pyplot as plt
import pandas as pd
df = pd.read_excel('abc.xlsx')
y = df.loc[[1],['test1','test2']].values
y = [val for sublist in y for val in sublist]
x = [1,2]
plt.bar(x,y,width=0.6)
plt.xticks([])
plt.xlabel('Subject')
plt.ylabel('Marks')
plt.title('Programming language usage')
plt.savefig('foo1')

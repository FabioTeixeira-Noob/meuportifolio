import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

# Criar a figura 3D
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# Ponto a ser localizado
x, y, z = 1, 2, 3
ax.scatter(x, y, z, color='red', s=100, label='Ponto (1, 2, 3)')

# Adicionar anotações e ajustar os eixos
ax.text(x, y, z, '  (1,2,3)', color='black')
ax.set_xlabel('Eixo X')
ax.set_ylabel('Eixo Y')
ax.set_zlabel('Eixo Z')
ax.set_title('Localização do ponto (1, 2, 3) em R³')
ax.legend()

plt.tight_layout()
plt.show()

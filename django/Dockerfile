FROM python:3.9

# 设置 python 环境变量
ENV PYTHONUNBUFFERED 1

# 创建 code 文件夹并将其设置为工作目录
RUN mkdir /code
WORKDIR /code
# 更新 pip
RUN pip install pip -U
# 将 requirements.txt 复制到容器的 code 目录
ADD requirements.txt /code/
# 安装库
RUN pip install -r requirements.txt
# 将当前目录复制到容器的 code 目录
ADD .. /code/
CMD [ "python3", "manage.py", "makemigrations" ]
CMD [ "python3", "manage.py", "migrate" ]

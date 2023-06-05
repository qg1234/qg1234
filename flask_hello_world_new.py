
# 此文件的功能
# 最简单的小程序后台，在小程序端点击一个按钮，flask后台返回hello world！并在下程序端显示

from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/button', methods=['POST'])
def button_click():
    data = request.json
    button_id = data.get('buttonId')
    if button_id == 'button1':
        response = {'message': 'Hello, World!'}
    else:
        response = {'message': 'Invalid button ID'}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True,host="0.0.0.0",port=5000)

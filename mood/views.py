from django.shortcuts import render,redirect
from django.core import serializers
from main.models import Mood
from .form import MoodForm


def mood(request):

    if request.method =="POST":
        filled_form=MoodForm(request.POST)
        if filled_form.is_valid():
            temp_form = filled_form.save(commit=False)
            temp_form.mood_member_id = request.user
            temp_form.save()
            return redirect('month')
            

    mood_form=MoodForm()
    return render(request, 'mood.html',{"mood_form" : mood_form})

def month(request):

    # a = []    # 빈 리스트 생성
    # b = [ Mood.objects.all() ]

    # for i in range(5):
    #     line = []
    #     for j in range(7):
    #         print(b,end="")
    #     print()

    filtered_mood = Mood.objects.filter(mood_member_id= request.user)
    serializerMood = serializers.serialize('json', filtered_mood)
    return render(request, 'month.html',{ 'serializerMood': serializerMood })

def to_main(request):

    return render(request, 'home.html')


# [0][1][2]... 인덱스로 참조
# {}=> 딕셔너리 키값으로 참조
# [
#     {"model":"main.mood",
#         "pk":1,
#         "fields":{
#             "mood_val":"64",
#             "mood_state":"오늘의 기분은 좋음",
#             "mood_content":"우헤우헤우우웅헤",
#             "mood_date":"2020-09-15T13:59:20.072Z",
#             "mood_member_id":1}
#             },
#     {"model":"main.mood",
#     "pk":2,
#     "fields":{
#         "mood_val":"84",
#         "mood_state":"오늘의 기분은 매우 좋음",
#         "mood_content":"승규형해결사",
#         "mood_date":"2020-09-15T12:43:52.514Z",
#         "mood_member_id":1}
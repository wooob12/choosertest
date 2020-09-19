from django import forms
from main.models import Mood


class MoodForm(forms.ModelForm):

    class Meta:
        model = Mood
        fields=('mood_val', 'mood_state', 'mood_content',)

    def __init__(self, *args, **kwargs):
         super().__init__(*args, **kwargs)

         self.fields['mood_val'].widget.attrs.update({
            "id" : 'some',
            "placeholder":'50',
            "label": '수치',
         })
         self.fields['mood_state'].widget.attrs.update({
             "id" :'result-box-b',
             "placeholder":'오늘의 기분은 보통'
         })
         self.fields['mood_content'].widget.attrs.update({
             "id" :'content-box',
             "placeholder":'왜 그런 기분이시죠?'
         })
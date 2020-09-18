from django import forms
from main.models import Prefer, Comment_prefer

class PreferForm(forms.ModelForm):
    class Meta:
        model = Prefer
        fields = ('prefer_title', 'prefer_content', 'prefer_file',)
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['prefer_title'].label = "취향"
        self.fields['prefer_content'].label = "소개해봐"
        self.fields['prefer_file'].label = "마음 껏"
        self.fields['prefer_title'].widget.attrs.update({
            'class': 'prefer_title',
            'placeholder': '제목',
        })

# 댓글 기능
class CommentForm(forms.ModelForm):

    class Meta:
        model = Comment_prefer
        fields = ('com_pre_content', )
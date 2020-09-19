from django import forms
from main.models import Prefer, Comment_prefer

class PreferForm(forms.ModelForm):
    class Meta:
        model = Prefer
        fields = ('prefer_title', 'prefer_content', 'prefer_file',)
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['prefer_title'].label = "주제"
        self.fields['prefer_content'].label = "내용"
        self.fields['prefer_file'].label = "이미지"
        self.fields['prefer_title'].widget.attrs.update({
            'class': 'prefer_title',
            'placeholder': '마음껏 소개해바...ㅡㅡ^^',
        })
        self.fields['prefer_content'].widget.attrs.update({
            'class': 'prefer_content',
            'placeholder': '너의 취향,,, @>-->----,,,,',
        })
        self.fields['prefer_file'].widget.attrs.update({
            'class': 'prefer_file',
        })

# 댓글 기능
class CommentForm(forms.ModelForm):

    class Meta:
        model = Comment_prefer
        fields = ('com_pre_content', )
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['com_pre_content'].label = "댓글"
        self.fields['com_pre_content'].widget.attrs.update({
            'class': 'com_pre_content',
            'placeholder': '댓글을 달아주세용~!',
        })
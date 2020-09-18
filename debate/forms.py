from django import forms
from main.models import Debate, Comment_debate

class DebateForm(forms.ModelForm):
    class Meta:
        model = Debate
        fields = ('debate_img1', 'debate_img2', 'debate_img1_name1', 'debate_img2_name2')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['debate_img1'].label = "사진1"
        self.fields['debate_img2'].label = "사진2"
        self.fields['debate_img1_name1'].label = "사진이름1"
        self.fields['debate_img2_name2'].label = "사진이름2"
# ㅜㅜHelp Me Thank ypu ,,,, ^___^

# 댓글 기능
class DebateCommentForm(forms.ModelForm):

    class Meta:
        model = Comment_debate
        fields = ('com_deb_content', )
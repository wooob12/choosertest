from django.shortcuts import render, redirect, get_object_or_404
from django.core.exceptions import PermissionDenied
from django.contrib.auth.decorators import login_required
from django.http import Http404
from django.core.paginator import Paginator
from .forms import PreferForm, CommentForm
from main.models import User, Topic, Prefer, Comment_prefer
# Cremainate yosur views herer
# Create your views here

def prefer_index(request):
    all_prefer = Prefer.objects.all()
    # https://egg-money.tistory.com/111?category=811218 참조
    # 페이지네이션
    prefers = Prefer.objects
    prefer_list = Prefer.objects.all()
    paginator = Paginator(prefer_list, 3)
    page = request.GET.get('page')
    posts = paginator.get_page(page)
    return render(request, 'prefer_index.html', {'all_prefer':all_prefer, 'prefers':prefers, 'posts':posts})

def my_prefer_index(request):
    my_prefer = Prefer.objects.filter(prefer_member_id=request.user)
    return render(request, 'prefer_index.html', {'my_prefer':my_prefer})


@login_required(login_url='/login')
def prefer_create(request):
    if request.method == "POST":
        filled_form = PreferForm(request.POST, request.FILES) # request.FILES 없을 때는 이미지가 따로 들어가지 않아요
        if filled_form.is_valid():
            temp_form = filled_form.save(commit=False)
            temp_form.prefer_member_id = request.user
            temp_form.save()
            return redirect('prefer_index')
    prefer_form = PreferForm()
    return render(request, 'prefer_create.html', {'prefer_form':prefer_form})

@login_required(login_url='/login')
def prefer_detail(request, prefer_id):
    my_prefer = get_object_or_404(Prefer, pk=prefer_id)
    prefer_comment_form = CommentForm()
    return render(request, 'prefer_detail.html', {'my_prefer':my_prefer, 'prefer_comment_form':prefer_comment_form})
    # 왼쪽이 '내가 정해준 저장공간 이름', 오른쪽이 저장할 것의(객체) 이름

def prefer_delete(request, prefer_id):
    my_prefer = Prefer.objects.get(pk=prefer_id)
    if request.user == my_prefer.prefer_member_id:
        my_prefer.delete()
        return redirect('prefer_index')

    raise PermissionDenied

def prefer_update(request, prefer_id):
    my_prefer = Prefer.objects.get(pk=prefer_id)
    prefer_form = PreferForm(instance=my_prefer)
    if request.method == "POST":
        updated_form = PreferForm(request.POST, instance=my_prefer)
        if updated_form.is_valid():
            updated_form.save()
            return redirect('prefer_detail', prefer_id)
    return render(request, 'prefer_create.html', {'prefer_form':prefer_form})


def prefer_create_comment(request, prefer_id):
    prefer_comment_form = CommentForm(request.POST)
    if prefer_comment_form.is_valid():
        temp_form = prefer_comment_form.save(commit=False)
        temp_form.com_pre_member_id = request.user
        temp_form.com_pre_prefer_id = Prefer.objects.get(pk=prefer_id)
        temp_form.prefer = Prefer.objects.get(pk=prefer_id)
        temp_form.save()
        return redirect('prefer_detail', prefer_id)
    else: 
        return redirect('prefer_detail', prefer_id)

def prefer_delete_comment(request, prefer_id, com_pre_id):
    prefer_my_comment = Comment_prefer.objects.get(pk=com_pre_id)
    if request.user == prefer_my_comment.com_pre_member_id:
        prefer_my_comment.delete()
        return redirect('prefer_detail', prefer_id)

    else:
        raise PermissionDenied

# 수정버튼
# def prefer_update_comment(request, prefer_id, com_pre_id):
#     prefer_my_comment = Comment_prefer.objects.get(pk=com_pre_id)
#     prefer_my_comment_form = CommentForm(instance=prefer_my_comment)
#     if request.method == "POST":
#         comment_updated_form = CommentForm(request.POST, instance=prefer_my_comment)
#         if comment_updated_form.is_valid():
#             comment_updated_form.request.user
#             comment_updated_form.save()
#             return redirect('prefer_detail', prefer_id)
#         return render(request, 'prefer_detail.html', {'prefer_my_comment_form':prefer_my_comment_form})

#     else:
#         raise PermissionDenied

# 수정버튼
# def prefer_update_comment(request, prefer_id, com_pre_id):
#     prefer_my_comment = Comment_prefer.objects.get(pk=com_pre_id)
#     prefer_my_comment_form = CommentForm(instance=prefer_my_comment)
#     if request.method == "POST":
#         comment_updated_form = CommentForm(request.POST, instance=prefer_my_comment)
#         if comment_updated_form.is_valid():
#             comment_updated_form.request.user
#             comment_updated_form.save()
#             return redirect('prefer_detail', prefer_id)
#         return render(request, 'prefer_detail.html', {'prefer_my_comment_form':prefer_my_comment_form})

#     else:
#         raise PermissionDenied

# 수정버튼
# def prefer_update_comment(request, prefer_id, com_pre_id):
#     prefer_my_comment = Comment_prefer.objects.get(pk=com_pre_id)
#     prefer_my_comment_form = CommentForm(instance=prefer_my_comment)
#     if request.method == "POST":
#         comment_updated_form = CommentForm(request.POST, instance=prefer_my_comment)
#         if comment_updated_form.is_valid():
#             comment_updated_form.request.user
#             comment_updated_form.save()
#             return redirect('prefer_detail', prefer_id)
#         return render(request, 'prefer_detail.html', {'prefer_my_comment_form':prefer_my_comment_form})

#     else:
#         raise PermissionDenied

# 수정버튼
# def prefer_update_comment(request, prefer_id, com_pre_id):
#     prefer_my_comment = Comment_prefer.objects.get(pk=com_pre_id)
#     prefer_my_comment_form = CommentForm(instance=prefer_my_comment)
#     if request.method == "POST":
#         comment_updated_form = CommentForm(request.POST, instance=prefer_my_comment)
#         if comment_updated_form.is_valid():
#             comment_updated_form.request.user
#             comment_updated_form.save()
#             return redirect('prefer_detail', prefer_id)
#         return render(request, 'prefer_detail.html', {'prefer_my_comment_form':prefer_my_comment_form})

#     else:
#         raise PermissionDenied

# 수정버튼
# def prefer_update_comment(request, prefer_id, com_pre_id):
#     prefer_my_comment = Comment_prefer.objects.get(pk=com_pre_id)
#     prefer_my_comment_form = CommentForm(instance=prefer_my_comment)
#     if request.method == "POST":
#         comment_updated_form = CommentForm(request.POST, instance=prefer_my_comment)
#         if comment_updated_form.is_valid():
#             comment_updated_form.request.user
#             comment_updated_form.save()
#             return redirect('prefer_detail', prefer_id)
#         return render(request, 'prefer_detail.html', {'prefer_my_comment_form':prefer_my_comment_form})

#     else:
#         raise PermissionDenied



